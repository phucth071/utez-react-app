import Header from '../layout/Header';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import CourseLayout from '../components/CourseLayout';
import SideBar from '../layout/SideBar';
import { useParams } from 'react-router-dom';

const DetailCourse = () => {
    const { courseId } = useParams();

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <Navbar />

            {/* Nội dung chính */}
            <div className="flex-grow pr-6 pl-6">
                <SideBar>
                    <CourseLayout></CourseLayout>
                </SideBar>
            </div>
            <Footer />
        </div>
    );
};

export default DetailCourse;
