import { useLoaderData } from "react-router-dom";
import BreakingNews from "./shared/BreakingNews";
import Header from "./shared/Header";
import LeftSide from "./shared/LeftSide";
import Navbar from "./shared/Navbar";
import RightSide from "./shared/RightSide";
import News from "../News";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <News key={aNews._id} aNews={aNews}></News>)
                    }
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;