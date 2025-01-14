import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetails(){

    const allBooks = useSelector((list) => list.books.items)

    const params = useParams()
    const book = allBooks.filter((b) => b.id === params.id);


    return(
        <>
            {book.map(book => {
                return(
                    <div key={book.id} 
                    className="flex flex-col justify-center items-center bg-book-detail bg-no-repeat bg-cover h-[100vh] brightness-90">
                    <div className="text-xl w-[40%] h-96 flex flex-col gap-5 bg-[rgba(248,233,102,0.38)] rounded-2xl p-6">
                        <h2 className=" self-center text-3xl mb-5">{book.title}</h2>
                        <h2><strong>Author:</strong> {book.author}</h2>                      
                        <h2><strong>Description:</strong> {book.description}</h2>
                        <h2><strong>Rating: </strong>{book.rating}</h2>
                        <h2><strong>Category: </strong>{book.category}</h2>

                        <Link to="/browsebooks" className="border border-black w-32 h-[39px] rounded-md flex justify-center items-center ml-[40%] text-base bg-black text-white">
                        <button>Back to Browse</button>
                        </Link>
                        </div>
                        
                    </div>

                )

            })}
                    

        </>
    )

    
}

export default BookDetails;