import { GoDotFill } from "react-icons/go";

const SecondColumn = () => {
  return (
    <div>
      <div className="bg-[#5574eb] p-6 rounded-xl text-white">
        <div>
          <h2 className="text-2xl font-poppins font-semibold">
            Foundation of User Experience{" "} <br />
            UI Designer
          </h2>
          <div className="flex gap-2 font-lg font-medium mt-4">
            <p>4 Assignments</p>
            <GoDotFill className="text-white inline mt-[4px]" />
            <p className="inline ">20 videos</p>
          </div>
          <div className="flex gap-10 lg:gap-36">
            <button
              type="button"
              className="px-10 mt-10 font-semibold rounded-full bg-white text-black"
            >
              Continue Course
            </button>
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4 text-center font-poppins"
              style={{ "--value": 80, width: "120px", height: "120px" }}
              role="progressbar"
            >
              80% <br />Completed
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-6 rounded-xl shadow-xl border-[1px] border-gray-300">
        <div>
          <h2 className="text-2xl font-poppins font-semibold">
            Foundation of User Experience{" "} <br />
            UI Designer
          </h2>
          <div className="flex gap-2 font-lg font-medium mt-4">
            <p>4 Assignments</p>
            <GoDotFill className="text-white inline mt-[4px]" />
            <p className="inline ">20 videos</p>
          </div>
          <div className="flex gap-10 lg:gap-36">
            <button
              type="button"
              className="px-10 mt-10 font-semibold rounded-full bg-white text-black"
            >
              Continue Course
            </button>
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4 text-center font-poppins"
              style={{ "--value": 65, width: "120px", height: "120px" }}
              role="progressbar"
            >
              65% <br />Completed
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-6 rounded-xl shadow-xl border-[1px] border-gray-300">
        <div>
          <h2 className="text-2xl font-poppins font-semibold">
            Foundation of User Experience{" "} <br />
            UI Designer
          </h2>
          <div className="flex gap-2 font-lg font-medium mt-4">
            <p>4 Assignments</p>
            <GoDotFill className="text-white inline mt-[4px]" />
            <p className="inline ">20 videos</p>
          </div>
          <div className="flex gap-10 lg:gap-36">
            <button
              type="button"
              className="px-10 mt-10 font-semibold rounded-full bg-white text-black"
            >
              Continue Course
            </button>
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4 text-center font-poppins"
              style={{ "--value": 85, width: "120px", height: "120px" }}
              role="progressbar"
            >
              85% <br />Completed
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-6 rounded-xl shadow-xl border-[1px] border-gray-300">
        <div>
          <h2 className="text-2xl font-poppins font-semibold">
            Foundation of User Experience{" "} <br />
            UI Designer
          </h2>
          <div className="flex gap-2 font-lg font-medium mt-4">
            <p>4 Assignments</p>
            <GoDotFill className="text-white inline mt-[4px]" />
            <p className="inline ">20 videos</p>
          </div>
          <div className="flex gap-10 lg:gap-36">
            <button
              type="button"
              className="px-10 mt-10 font-semibold rounded-full bg-white text-black"
            >
              Continue Course
            </button>
            <div
              className="radial-progress bg-primary text-primary-content border-primary border-4 text-center font-poppins"
              style={{ "--value": 85, width: "120px", height: "120px" }}
              role="progressbar"
            >
              85% <br />Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondColumn;
