import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>All Category: {categories.length}</h2>
            <div className=" border rounded-md">
                {
                    categories.map(category => <Link
                        key={category.id}
                        className="block p-4 bg-[#F3F3F3] border-b-2"
                    >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSide;