// import { useEffect } from "react";
import Header from "./pages/shared/Header";
import Navbar from "./pages/shared/Navbar";
import RightSide from "./pages/shared/RightSide";

const NewsDetails = ({aNews}) => {
    console.log(aNews);

    // useEffect(() => {
    //     fetch('/data/news.json')
    // }, [])


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">

                </div>
                <div className="col-span-1">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;