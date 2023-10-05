import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex bg-[#F3F3F3] p-2 rounded-md">
                <button className="btn btn-outline btn-secondary">Breaking News</button>
                <Marquee pauseOnHover={true}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;