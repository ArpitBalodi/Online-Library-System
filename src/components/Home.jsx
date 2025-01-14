import { useState } from "react";
import { BookCategories } from "../utils/Category";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

  const [index, setIndex] = useState(0);
  
  const allBooks = useSelector((list) => list.books.items)
  
  const popularBooks = [...allBooks].sort((a, b) => b.rating - a.rating).slice(0,6)
  
  

  const categories = BookCategories;

  function handlePrev() {
    setIndex(index === 0 ? BookCategories.length - 1 : index - 1)
  }

  function handleNext() {
    setIndex(index === BookCategories.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="flex flex-col items-center bg-[#46C2CB]">
      <h1 className="flex justify-center items-center h-28 text-4xl text-white w-full mt-40 mb-5">Welcome to the Bookstore!</h1>

        <h1 className=" underline w-full text-4xl font-bold mb-5 flex justify-center">Book Category</h1>
      <div className=" flex flex-col m-5 pl-10 pr-10 pt-10 w-3/4 bg-[#F5ECD5] mb-20">


        <div className="relative">
          <img src={categories[index].image} className=" w-full h-[600px] object-cover" />

          <Link 
            to={`/books/${categories[index].type}`} 
            className="relative flex justify-center top-[-80px] text-[#FF204E] shadow-lg text-5xl font-bold">
            <p className="bg-black">
            {categories[index].type}

            </p>
          </Link>
          <button className="absolute top-[40%] left-2 h-10 w-11 text-3xl bg-white rounded-full flex justify-center"
            onClick={handlePrev}>
            «
          </button>

          <button className="absolute top-[40%] left-[95%] h-10 w-11 text-3xl bg-white rounded-full flex justify-center"
            onClick={handleNext}>
            »
          </button>
        </div>
      </div>

      <hr className="w-full border-black mb-8" />

      <div>
          <h1 className=" underline text-4xl font-bold mb-5 flex justify-center">Popular Books</h1>
          <div className="grid grid-cols-3 bg-[#F5ECD5] m-8">           
              {popularBooks.map((book) => (
                  <div key={book.id} className="flex flex-col items-center bg-blue-300 m-7 pb-5 rounded-xl transition ease-in-out hover:scale-110">
                  <img src={book.image} alt={book.title} className=" w-[230px] h-[300px] object-cover m-10 mb-4"/> 
                  <h2 className="text-2xl mb-4 font-bold">{book.title}</h2>

                  <Link to={`/book/${book.id}`}>
                      <button className=" w-28 bg-blue-600 text-white h-8 rounded">More Details</button>
                  </Link> 

                  </div> 
                  

               ))}

                   
            </div>
        </div>

    </div>
  );
};


export default Home;