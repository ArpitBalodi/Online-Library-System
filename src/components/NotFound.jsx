import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound(){
    const err = useRouteError();

    return(
        
        <div className="flex flex-col justify-center items-center h-96 mt-11">
            <h3 className=" mb-10 text-3xl">{err.status} Page Not Found</h3>
            <h2 className=" font-light">Sorry, but we can not find the page you are looking for...</h2>
            <Link to="/" className=" bg-blue-700 border-2 border-black mt-10 text-white p-2">
                Go Back
            </Link>
        </div>
    )
}

export default NotFound;