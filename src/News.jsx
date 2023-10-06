import { Link } from "react-router-dom";

const News = ({ aNews }) => {
    const { title, image_url, author, rating, total_view, details, _id } = aNews
    return (
        <div className="mb-8">
            <div className="flex bg-[#F3F3F3] items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={author?.img} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{author?.name}</h3>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322V3.322Z" stroke="#706F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21701 10.907C6.97487 10.4713 6.59491 10.1284 6.13678 9.93198C5.67864 9.7356 5.16826 9.6969 4.68576 9.82197C4.20325 9.94704 3.77594 10.2288 3.47089 10.623C3.16584 11.0172 3.00032 11.5015 3.00032 12C3.00032 12.4984 3.16584 12.9828 3.47089 13.377C3.77594 13.7712 4.20325 14.0529 4.68576 14.178C5.16826 14.3031 5.67864 14.2644 6.13678 14.068C6.59491 13.8716 6.97487 13.5287 7.21701 13.093M7.21701 10.907C7.39701 11.231 7.50001 11.603 7.50001 12C7.50001 12.397 7.39701 12.77 7.21701 13.093M7.21701 10.907L16.783 5.59299M7.21701 13.093L16.783 18.407M16.783 18.407C16.6395 18.6654 16.5482 18.9495 16.5145 19.2431C16.4808 19.5368 16.5052 19.8342 16.5864 20.1184C16.6676 20.4026 16.804 20.668 16.9878 20.8995C17.1716 21.1309 17.3991 21.324 17.6575 21.4675C17.9159 21.611 18.2 21.7023 18.4936 21.736C18.7873 21.7697 19.0847 21.7453 19.3689 21.6641C19.6531 21.5829 19.9185 21.4465 20.15 21.2627C20.3815 21.0789 20.5745 20.8514 20.718 20.593C21.0079 20.0712 21.0786 19.4556 20.9146 18.8816C20.7506 18.3077 20.3653 17.8224 19.8435 17.5325C19.3217 17.2426 18.7061 17.1719 18.1321 17.3359C17.5582 17.4999 17.0729 17.8852 16.783 18.407V18.407ZM16.783 5.59299C16.9233 5.85713 17.1148 6.09066 17.3463 6.27992C17.5779 6.46919 17.8449 6.61039 18.1316 6.69527C18.4184 6.78015 18.7192 6.80702 19.0165 6.77429C19.3137 6.74156 19.6015 6.64989 19.8629 6.50465C20.1244 6.35942 20.3542 6.16351 20.539 5.92841C20.7239 5.6933 20.86 5.4237 20.9394 5.13538C21.0189 4.84705 21.04 4.54578 21.0016 4.24919C20.9633 3.95259 20.8662 3.66662 20.716 3.40799C20.4201 2.89833 19.936 2.52513 19.3678 2.36861C18.7996 2.21208 18.1927 2.28474 17.6775 2.57095C17.1624 2.85716 16.78 3.33408 16.6128 3.89919C16.4455 4.4643 16.5066 5.07248 16.783 5.59299V5.59299Z" stroke="#706F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>

                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    {
                        details?.length > 200 ? <p className="text-lg">{details.slice(0, 200)}<Link to={`/news/${_id}`} className="text-pink-500 ml-3 font-semibold">Read more...</Link></p> : <p>{details}</p>
                    }
                </div>
                <div className="flex justify-between px-4 py-8">
                    <div className="flex gap-3">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <p>{rating?.number}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z" fill="#706F6F" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75C16.971 3.75 21.186 6.973 22.676 11.44C22.796 11.802 22.796 12.192 22.676 12.553C21.189 17.024 16.971 20.25 11.999 20.25C7.029 20.25 2.813 17.027 1.324 12.56C1.20375 12.1987 1.20375 11.8083 1.324 11.447H1.323ZM17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27225 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12C6.75 10.6076 7.30312 9.27225 8.28769 8.28769C9.27225 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12Z" fill="#706F6F" />
                        </svg>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;