import classNames from "classnames/bind";
import styles from "./Course.module.scss";
import avatar from "../../assets/images/khoahoc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const cx = classNames.bind(styles);

function Course() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //     listCourses()
  //         .then((response) => {
  //             setCourses(response.data);
  //         })
  //         .catch((error) => {
  //             console.error(error);
  //         });
  // }, []);

  return (
    // <div className={cx('cards')}>
    //     {courses.map((course) => (
    //         <div className={cx('card')} key={course.id}>
    //             <div className={cx('card-image')} style={{ backgroundImage: `url(${avatar})` }}></div>
    //             <div className={cx('card-body')}>
    //                 <p className={cx('desciption')}>{course.description}</p>
    //                 <a className={cx('name')} href="https://web.facebook.com/nmkla62">
    //                     {course.name}
    //                 </a>
    //                 <div className={cx('student')}>
    //                     <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
    //                     <p className={cx('count-student')}>20 học sinh</p>
    //                     <FontAwesomeIcon className={cx('circle')} icon={faCircle} />
    //                     <p className={cx('count-section')}>{course.lessonPlanId} tiết</p>
    //                 </div>
    //             </div>
    //         </div>
    //     ))}
    // </div>

    // <div className={cx('cards')}>
    //     {courses.map((course) => (
    //         <div className={cx('card-boss')} key={course.id}>
    //             <div className={cx('card')}>
    //                 <div className={cx('card-image')} style={{ backgroundImage: `url(${avatar})` }}></div>
    //                 <div className={cx('card-body')}>
    //                     <p className={cx('desciption')}>{course.description}</p>
    //                     <div className={cx('name-a')}>
    //                         <a className={cx('name')} href="https://web.facebook.com/nmkla62">
    //                             {course.name}
    //                         </a>
    //                     </div>
    //                     <div className={cx('student')}>
    //                         <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
    //                         <p className={cx('count-student')}>20 học sinh</p>
    //                         <FontAwesomeIcon className={cx('circle')} icon={faCircle} />
    //                         <p className={cx('count-section')}>{course.lessonPlanId}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     ))}
    // </div>

    <div className={cx("cards")}>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("card-boss")}>
        <div className={cx("card")}>
          <div
            className={cx("card-image")}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={cx("card-body")}>
            <p className={cx("desciption")}>HỌC KỲ 2 2023 2024</p>
            <div className={cx("name-a")}>
              <a className={cx("name")} href="https://web.facebook.com/nmkla62">
                LẬP TRÌNH DI ĐỘNG
              </a>
            </div>
            <div className={cx("student")}>
              <FontAwesomeIcon className={cx("icon")} icon={faUsers as IconProp} />
              <p className={cx("count-student")}>20 học sinh</p>
              <FontAwesomeIcon className={cx("circle")} icon={faCircle as IconProp} />
              <p className={cx("count-section")}>5 tiết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
