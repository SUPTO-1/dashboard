import {  FaHatCowboy } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Video: 2, Practice: 4 },
  { name: 'Feb', Video: 3, Practice: 2 },
  { name: 'Mar', Video: 2, Practice: 3 },
  { name: 'Apr', Video: 6, Practice: 4 },
  { name: 'May', Video: 7, Practice: 6 },
  { name: 'Jun', Video: 8, Practice: 7 },
  { name: 'Jul', Video: 6, Practice: 8 },
  { name: 'Aug', Video: 4, Practice: 6 },
  { name: 'Sep', Video: 2, Practice: 5 },
  { name: 'Oct', Video: 7, Practice: 3 },
  { name: 'Nov', Video: 6, Practice: 4 },
  { name: 'Dec', Video: 5, Practice: 5 },
];

const ThirdColumn = () => {
    return (
        <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">04</h3>
              <p className="text-gray-500">Completed Course</p>
            </div>
            <div className="text-center">
                <FaHatCowboy className="text-4xl mb-4"></FaHatCowboy>
              <p className="">20% Increase</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">12</h3>
              <p className="text-gray-500">Course in Progress</p>
            </div>
            <div className="text-center">
                <FaBarsProgress className="text-4xl mb-4"></FaBarsProgress>
              <p className="">1% Decrease</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Course Activity</h3>
          <select className="text-gray-600 bg-gray-200 rounded px-4 py-2">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Video" fill="#6366F1" barSize={12} />
            <Bar dataKey="Practice" fill="#4F46E5" barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between font-poppins font-bold">
        <div>
            <h2>Reminders</h2>
        </div>
        <div>
        <select className="text-gray-600 bg-gray-200 rounded px-4 py-2">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
      </div>
    );
};

export default ThirdColumn;