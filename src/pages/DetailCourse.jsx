import React from 'react';
import Header from '../layout/Header';
import Footer from '@layout/Footer.jsx';
import Navbar from '@layout/NavBar.jsx';
import CourseLayout from '../components/CourseLayout';
import SideBar from '../layout/Sidebar';
const DetailCourse = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50">
                <Header />
                <Navbar />
            </div>

            {/* Nội dung chính */}
            <div className="flex-grow pr-6 pl-6">
                <SideBar>
                    <CourseLayout/>
                </SideBar>
            </div>
            <Footer />
        </div>
    );
};

export default DetailCourse;
