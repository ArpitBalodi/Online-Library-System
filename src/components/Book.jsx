import { Link } from "react-router-dom";

function Book(prop){
    return(
        <div>
            <div className="flex justify-center mt-3">
                <img 
                src={prop.bookDetail.image} 
                alt={prop.bookDetail.title}
                className=" w-64 flex items-center h-64 rounded-md"
                /> 
            </div>
            <div className=" mt-2 ml-3 mr-2">
                <h3 className=" font-bold text-[18px] h-[66px]">{prop.bookDetail.title}</h3>
                <div className="text-[16px]">
                <h2><strong className=" font-semibold">Author:</strong> {prop.bookDetail.author}</h2>
                <p><strong className=" font-semibold">Rating:</strong> {prop.bookDetail.rating}</p>
                <h4><strong className=" font-semibold">Category: </strong>{prop.bookDetail.category}</h4>
                </div>

                <Link to={`/book/${prop.bookDetail.id}`} className="flex items-center justify-center mt-4 mb-3">
                <button className=" w-28 bg-blue-600 hover:bg-blue-800 text-white h-8 rounded">View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Book;