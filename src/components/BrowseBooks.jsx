import { useSelector } from "react-redux";
import Book from "./Book";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BrowseBooks(){

    const allBooks = useSelector((list) => list.books.items)
    
    
    const [search,setSearch] = useState("");
    const {category}  = useParams(); // Get category from URL


    const filteredBooks = allBooks.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
        
        const matchesCategory = !category || book.category.toLowerCase() === category.toLowerCase();
      
        return matchesSearch && matchesCategory;
      });

    

    return(
        <div className="flex flex-col items-center bg-blue-400 pb-10 pt-28">
        <h1 className="m-5 text-2xl">{category ? `${category} Books` : 'Browse All Books'}</h1>

            <div className="flex justify-center m-4">
                <input 
                type="text"
                placeholder="Search Book By Title or Author" className=" w-[68vh] h-8 pl-4 mb-8 rounded"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <section className="grid gap-12 grid-cols-4 w-[89%]">           
                    {filteredBooks.map((book) => (
                        <div key={book.id}
                        className="rounded-lg bg-blue-300 w-[320px]">
                                <Book bookDetail={book}/>
                        </div>
                        
                        
                    ))}
                   
            </section>
            

             {filteredBooks.length === 0 && 
                    <p className="text-2xl pb-[40%] pt-[10%]">
                    No books are found 😞</p>}
        </div>
    )
}

export default BrowseBooks;