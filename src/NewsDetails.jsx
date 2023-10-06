import { useLoaderData, useParams } from "react-router-dom";
import Header from "./pages/shared/Header";
import Navbar from "./pages/shared/Navbar";
import RightSide from "./pages/shared/RightSide";
import { useEffect, useState } from "react";
import MainNewsDetails from "./MainNewsDetails";

const NewsDetails = () => {
    const [detail, setDetail] = useState()

    const { id } = useParams()

    const news = useLoaderData()
    // console.log(news);


    useEffect(() => {
        const findDetails = news?.find(aNews => aNews._id == id)
        setDetail(findDetails)
    }, [id, news])
    // console.log(detail);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="col-span-3">
                    <MainNewsDetails detail={detail}></MainNewsDetails>
                </div>
                <div className="col-span-1">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;