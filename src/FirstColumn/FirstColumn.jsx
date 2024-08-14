import { useState } from 'react';
import { FiGrid, FiBook, FiCheckSquare, FiDollarSign, FiBarChart, FiPieChart, FiHelpCircle, FiSettings, FiBox, FiArrowRight, FiX } from 'react-icons/fi';

const FirstColumn = () => {
    const [isOpen, setIsOpen] = useState(false);  // Sidebar is initially closed on md and sm screens

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-100 text-gray-700 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:-translate-x-full'} w-64 max-h-screen lg:translate-x-0 lg:static lg:block lg:px-10`}>
                <div className="flex justify-between items-center mt-10 px-4">
                    <h2 className="font-bold text-lg text-purple-500">Menu</h2>
                    <button onClick={toggleSidebar} className="text-gray-500 lg:hidden">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-10">
                    <ul className="space-y-4 font-bold">
                        <li className="flex items-center px-4 py-2 text-purple-500">
                            <FiGrid className="h-6 w-6 mr-2" />
                            <span>Overview</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiBook className="h-6 w-6 mr-2" />
                            <span>My Course</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiCheckSquare className="h-6 w-6 mr-2" />
                            <span>Completed</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiBox className="h-6 w-6 mr-2" />
                            <span>Financial Aid</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiDollarSign className="h-6 w-6 mr-2" />
                            <span>Transactions</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiPieChart className="h-6 w-6 mr-2" />
                            <span>Reports</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiBarChart className="h-6 w-6 mr-2" />
                            <span>Statistics</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto mb-10">
                    <ul className="space-y-4 font-bold">
                        <li className="flex items-center px-4 py-2">
                            <FiHelpCircle className="h-6 w-6 mr-2" />
                            <span>Support</span>
                        </li>
                        <li className="flex items-center px-4 py-2">
                            <FiSettings className="h-6 w-6 mr-2" />
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`fixed top-0 left-0 mt-10 p-2 bg-gray-100 text-gray-700 rounded-full shadow-lg lg:hidden ${isOpen ? 'hidden' : 'block'}`}
            >
                <FiArrowRight className="h-6 w-6" />
            </button>
        </div>
    );
};

export default FirstColumn;
