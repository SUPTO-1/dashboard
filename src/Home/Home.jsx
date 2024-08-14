import FirstColumn from "../FirstColumn/FirstColumn";
import Navbar from "../Navbar/Navbar";
import SecondColumn from "../SecondColumn/SecondColumn";
import ThirdColumn from "../ThirdColumn.jsx/ThirdColumn";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:grid grid-cols-6 gap-4 max-h-screen">
                <div className="col-span-1">
                    <FirstColumn></FirstColumn>
                </div>
                <div className="col-span-2">
                    <SecondColumn></SecondColumn>
                </div>
                <div className="col-span-3">
                    <ThirdColumn></ThirdColumn>
                </div>
            </div>
        </div>
    );
};

export default Home;