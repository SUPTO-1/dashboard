import { FiGrid, FiBook, FiCheckSquare, FiDollarSign, FiBarChart, FiPieChart, FiHelpCircle, FiSettings, FiBox } from 'react-icons/fi';

const FirstColumn = () => {
    return (
        <div className="w-64 max-h-screen lg:px-10 bg-gray-100 text-gray-700 flex flex-col gap-20">
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

            <div className="mb-10">
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
    );
};

export default FirstColumn;
