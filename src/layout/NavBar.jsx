import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center p-2 px-4 bg-slate-300">
                {/* Logo bên trái */}
                <div className="text-white text-2xl font-bold">
                    <a href="/public" className="hover:text-gray-200">
                        <img src="/src/assets/utez-logo-emblem.svg" alt="Logo" className="w-12 h-12 inline-block mr-2" />
                    </a>
                </div>

                {/* Menu bên phải */}
                <div className="space-x-6">
                    <a href="/public" className="font-medium hover:text-gray-200 text-base">
                        Trang chủ
                    </a>
                    <a href="/my-course" className="font-medium hover:text-gray-200 text-base">
                        Khoá học của tôi
                    </a>
                    <a href="/dashboard" className="font-medium hover:text-gray-200 text-base">
                        Bảng điều khiển
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
