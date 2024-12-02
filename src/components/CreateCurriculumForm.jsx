import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { List, FileText, Edit2, Trash2, Plus, Check, X, Upload, CalendarIcon } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { axiosPrivate } from '@/axios/axios.js';
import { Toaster, toast } from 'sonner';

export default function Curriculum() {
  const [sections, setSections] = useState(() => {
    const savedSections = localStorage.getItem('sections');
    return savedSections ? JSON.parse(savedSections) : [
      {
        id: '1',
        title: 'Introduction',
        items: [
          { id: '1', type: 'lecture', title: 'Lecture Title', content: '' },
          { id: '2', type: 'quiz', title: 'Quiz Title' },
          { id: '3', type: 'assignment', title: 'Assignment Title', startDate: null, endDate: null },
          { id: '4', type: 'resource', title: 'Resource Title', file: null },
        ],
      },
    ];
  });

  const handlePostModule = async (sectionId) => {
    const section = sections.find(section => section.id === sectionId);

    const courseInfo = localStorage.getItem('courseInfo');
    const { id: courseId } = JSON.parse(courseInfo);

    const moduleData = {
      courseId: courseId,
      name: section.title
    };
    console.log('MODULE DATA: ', moduleData);
    const response = await axiosPrivate.post(`/modules`, moduleData);
    let moduleId;
    if (response.status === 200) {
      toast.info(response.data.message);
      moduleId = response.data.data.id;
      console.log(response);
      section.items.map(async item => {
        switch (item.type) {
          case 'lecture': {
            let lectureData = {
              moduleId,
              name: item.title,
              content: item.content
            };
            console.log(lectureData);
            await axiosPrivate.post(`/lectures`, lectureData)
                .then(r => {
                  console.log(r.data.message);
                  toast.info(r.data.message, { duration: 2000 });
                })
                .catch(e => {
                  console.error(e.response.data.message);
                  toast.error(e.response.data.message, { duration: 5000 });
                });
            break;
          }
          case 'quiz':
            break;
          case 'assignment': {
            let assignmentData = {
              title: item.title,
              content: item.content,
              startDate: item.startDate,
              endDate: item.endDate,
              state: "OPEN",
              moduleId: moduleId
            };
            let formData = new FormData();
            formData.append('assignment', new Blob([JSON.stringify(assignmentData)], { type: 'application/json' }));
            if (files[`${sectionId}-${item.id}`]) {
              formData.append('document', files[`${sectionId}-${item.id}`]);
            }
            console.log(formData);
            await axiosPrivate.post(`/assignments`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then(r => {
                  console.log(r);
                  toast.info(r.data.message, { duration: 2000 });
                })
                .catch(e => {
                  console.error(e.response.message);
                  toast.error(e.response.data.message, { duration: 5000 });
                });
            break;
          }
          case 'resource': {
            let resources = {
              title: item.title,
              moduleId: moduleId
            };
            let formData = new FormData();
            formData.append('resources', new Blob([JSON.stringify(resources)], { type: 'application/json' }));
            if (files[`${sectionId}-${item.id}`]) {
              formData.append('document', files[`${sectionId}-${item.id}`]);
            }
            console.log(formData);
            await axiosPrivate.post(`/resources`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            })
                .then(r => {
                  console.log(r);
                  toast.info(r.data.message, { duration: 2000 });
                })
                .catch(e => {
                  console.error(e.response.data.message);
                  toast.error(e.response.data.message, { duration: 5000 });
                });
            break;
          }
        }
      });
    }
  };

  const [editingSectionId, setEditingSectionId] = useState(null);
  const [editingItemId, setEditingItemId] = useState(null);
  const [tempTitle, setTempTitle] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const datePickerRef_starDay = useRef(null);
  const datePickerRef_endDay = useRef(null);
  const [itemContents, setItemContents] = useState({});

  useEffect(() => {
    localStorage.setItem('sections', JSON.stringify(sections));
  }, [sections]);

  const handleDateChange = (sectionId, itemId, field, date) => {
    setSections(sections.map(section =>
        section.id === sectionId
            ? {
              ...section,
              items: section.items.map(item =>
                  item.id === itemId ? { ...item, [field]: date } : item
              ),
            }
            : section
    ));
  };

  const addSection = () => {
    const newSection = {
      id: Date.now().toString(),
      title: 'New Section',
      items: [],
    };
    setSections([...sections, newSection]);
  };

  const addItem = (sectionId, type) => {
    const newItem = {
      id: Date.now().toString(),
      type,
      title: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
    };
    setSections(sections.map(section =>
        section.id === sectionId
            ? { ...section, items: [...section.items, newItem] }
            : section
    ));
  };

  const deleteItem = (sectionId, itemId) => {
    setSections(sections.map(section =>
        section.id === sectionId
            ? { ...section, items: section.items.filter(item => item.id !== itemId) }
            : section
    ));
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  const startEditingSection = (sectionId, currentTitle) => {
    setEditingSectionId(sectionId);
    setTempTitle(currentTitle);
  };

  const startEditingItem = (itemId, currentTitle, currentContent) => {
    setEditingItemId(itemId);
    setTempTitle(currentTitle);
    setItemContents(prevContents => ({
      ...prevContents,
      [itemId]: currentContent || ''
    }));
  };

  const saveSection = () => {
    setSections(sections.map(section =>
        section.id === editingSectionId
            ? { ...section, title: tempTitle }
            : section
    ));
    setEditingSectionId(null);
    setTempTitle('');
  };

  const saveItem = (sectionId) => {
    setSections(prevSections => {
      const updatedSections = prevSections.map(section =>
          section.id === sectionId
              ? {
                ...section,
                items: section.items.map(item =>
                    item.id === editingItemId
                        ? { ...item, title: tempTitle, content: itemContents[editingItemId]}
                        : item
                ),
              }
              : section
      );
      localStorage.setItem('sections', JSON.stringify(updatedSections));
      return updatedSections;
    });
    setEditingItemId(null);
    setTempTitle('');
  };

  const [files, setFiles] = useState({});
  const handleFileUpload = (sectionId, itemId, event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      setSections(sections.map(section =>
          section.id === sectionId
              ? {
                ...section,
                items: section.items.map(item =>
                    item.id === itemId ? { ...item, title: fileName } : item
                ),
              }
              : section
      ));
      setFiles(prevFiles => ({
        ...prevFiles,
        [`${sectionId}-${itemId}`]: file
      }));
    }
  };

  return (
      <>
        <Toaster richColors={true} position={'top-right'}/>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <List className="mr-2" /> Thêm nội dung khóa học
            </h1>
            <button
                onClick={addSection}
                className="bg-[#02a189] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              New Section
            </button>
          </div>

          {sections.map(section => (
              <div key={section.id} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  {editingSectionId === section.id ? (
                      <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={tempTitle}
                            onChange={(e) => setTempTitle(e.target.value)}
                            className="border border-gray-300 p-1 rounded"
                        />
                        <button onClick={saveSection} className="text-green-500 hover:text-green-700">
                          <Check size={18} />
                        </button>
                        <button
                            onClick={() => setEditingSectionId(null)}
                            className="text-red-500 hover:text-red-700"
                        >
                          <X size={18} />
                        </button>
                      </div>
                  ) : (
                      <h2 className="text-xl font-semibold flex items-center">
                        <List className="mr-2" /> {section.title}
                      </h2>
                  )}

                  <div>
                    <button
                        onClick={() => startEditingSection(section.id, section.title)}
                        className="p-1 bg-cyan-400 text-green-500 hover:text-green-700 rounded-full mr-2"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                        onClick={() => deleteSection(section.id)}
                        className="p-1 bg-rose-400 text-green-500 hover:text-green-700 rounded-full mr-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {section.items.map(item => (
                    <div
                        key={item.id}
                        className="bg-slate-200 p-3 mb-2 rounded flex flex-col group relative"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {item.type === 'lecture' && <FileText className="mr-2 text-blue-500" size={18} />}
                          {item.type === 'quiz' && <List className="mr-2 text-[#25764a]" size={18} />}
                          {item.type === 'assignment' && <FileText className="mr-2 text-[#CD4F2E]" size={18} />}
                          {item.type === 'resource' ? (
                              <div className="flex items-center">
                                <Upload className="mr-2 text-[#CD4F2E]" size={18} />
                                {editingItemId === item.id ? (
                                    <input
                                        type="text"
                                        value={tempTitle}
                                        onChange={(e) => setTempTitle(e.target.value)}
                                        className="ml-0 border border-gray-300 p-1 rounded"
                                    />
                                ) : (
                                    <span className={'p-0 ml-0'}>{item.title}</span>
                                )}
                                <input
                                    type="file"
                                    onChange={(e) => handleFileUpload(section.id, item.id, e)}
                                    className="hidden"
                                    id={`upload-${item.id}`}
                                />
                                <button
                                    onClick={() => document.getElementById(`upload-${item.id}`).click()}
                                    className="text-blue-500 hover:text-blue-700 hidden group-hover:flex items-center"
                                >
                                  <Plus size={20} className="absolute right-8 " />
                                </button>
                              </div>
                          ) : (
                              editingItemId === item.id ? (
                                  <input
                                      type="text"
                                      value={tempTitle}
                                      onChange={(e) => setTempTitle(e.target.value)}
                                      className="border border-gray-300 p-1 rounded"
                                  />
                              ) : (
                                  <span className="ml-0">{item.title}</span>
                              )
                          )}
                        </div>

                        <div className="hidden group-hover:flex space-x-2">
                          {item.type !== 'resource' && (
                              <button
                                  onClick={() => startEditingItem(item.id, item.title)}
                                  className="text-gray-500 hover:text-gray-700"
                              >
                                <Edit2 size={16} />
                              </button>
                          )}
                          <button
                              onClick={() => deleteItem(section.id, item.id)}
                              className="text-gray-500 hover:text-gray-700"
                          >
                            <Trash2 size={16} />
                          </button>

                          {editingItemId === item.id && (
                              <button onClick={() => saveItem(section.id)}
                                      className="text-green-500 hover:text-green-700">
                                <Check size={18} />
                              </button>
                          )}

                        </div>
                      </div>

                      {item.type === 'lecture' && editingItemId === item.id && (
                          <div className="mt-4">
                            <RichTextEditor
                                initialContent={itemContents[item.id] || item.content || ''}
                                onContentChange={(content) => setItemContents(prevContents => ({
                                  ...prevContents,
                                  [item.id]: content
                                }))}
                            />
                          </div>
                      )}

                      {item.type === 'assignment' && editingItemId === item.id && (
                          <div className="mt-4">
                            <div className="block text-sm font-medium text-gray-700 mb-1">
                              <p>Ngày bắt đầu</p>
                              <div className="mt-1 relative w-full px-3 py-2 bg-white rounded-md shadow-sm focus:outline-none
                      focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                   onClick={() => datePickerRef_starDay.current.setOpen(true)}>
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={item.startDate}
                                    ref={datePickerRef_starDay}
                                    onChange={(date) => handleDateChange(section.id, item.id, 'startDate', date)}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                            </div>

                            <div className="block text-sm font-medium text-gray-700 mb-1">
                              <p>Ngày kết thúc</p>
                              <div className="mt-1 relative w-full px-3 py-2 bg-white rounded-md shadow-sm focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                   onClick={() => datePickerRef_endDay.current.setOpen(true)}>
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={item.endDate}
                                    ref={datePickerRef_endDay}
                                    onChange={(date) => handleDateChange(section.id, item.id, 'endDate', date)}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                            </div>

                            <div className="block text-sm font-medium text-gray-700 mb-1">
                              <p>Nội dung</p>
                            </div>
                            <RichTextEditor
                                initialContent={itemContents[item.id] || item.content || ''}
                                onContentChange={(content) => setItemContents(prevContents => ({
                                  ...prevContents,
                                  [item.id]: content
                                }))}
                            />

                          </div>
                      )}
                    </div>
                ))}


                <div className="bg-[#02a189] p-4 rounded-lg flex justify-around mt-4">
                  <button
                      onClick={() => addItem(section.id, 'lecture')}
                      className="text-white flex items-center justify-between"
                  >
                    Lecture <Plus size={18} className="ml-1" />
                  </button>
                  <button
                      onClick={() => addItem(section.id, 'quiz')}
                      className="text-white flex items-center justify-between"
                  >
                    Quiz <Plus size={18} className="ml-1" />
                  </button>
                  <button
                      onClick={() => addItem(section.id, 'assignment')}
                      className="text-white flex items-center justify-between"
                  >
                    Assignment <Plus size={18} className="ml-1" />
                  </button>
                  <button
                      onClick={() => addItem(section.id, 'resource')}
                      className="text-white flex items-center justify-between"
                  >
                    Resource <Plus size={18} className="ml-1" />
                  </button>
                  <button
                      onClick={() => handlePostModule(section.id)}
                      className="p-2 bg-[#beede6] text-green-500 hover:text-green-700 rounded-full text-lg">
                    <Check size={24} />
                  </button>
                </div>
              </div>
          ))}

          {/*<button*/}
          {/*    onClick={getAllItemsData}*/}
          {/*    className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 transition-colors"*/}
          {/*>*/}
          {/*  Get All Items Data*/}
          {/*</button>*/}
        </div>
      </>
  );
}
