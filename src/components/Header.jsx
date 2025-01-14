import {Link} from "react-router-dom"
function Header(){
    return (
        <div className="fixed w-full z-10 bg-[#00337C] text-white h-24 flex justify-between items-center">
        <h1 className="text-3xl ml-6">Library Management System</h1>
            <ul className="flex flex-row gap-10 text-xl mr-10">
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/browsebooks">
                <li>Browse Books</li>
                </Link>

                <Link to="/addbook">
                <li>Add Book</li>   
                </Link>
            </ul>
        </div>
    )
}

export default Header;