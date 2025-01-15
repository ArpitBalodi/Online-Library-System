import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookDetails, setBookDetails] = useState({title: "",author: "",description: "",rating: "",category: "",image: "",});

  const [image, setImage] = useState(null);


  const handleChange = (e) => {
    const fieldName = e.target.name; // Get the name of the field
    const fieldValue = e.target.value; // Get the value of the field
  
    setBookDetails((prevDetails) => ({...prevDetails,[fieldName]: fieldValue,}));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image for the book.');
      return;
    }

    dispatch(addBook({ id: Date.now().toString(), ...bookDetails, rating: parseFloat(bookDetails.rating) }));
    alert("Book added successfully!");
    setBookDetails({ title: "", author: "", description: "", rating: "", category: "", image: "" });
    setImage(null);
    navigate("/browsebooks");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Validate the file type
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setBookDetails((prevDetails) => ({
          ...prevDetails,
          // Convert image to Base64
          image: reader.result, 
        }));
        // Set image preview
        setImage(reader.result); 
      };
      // Convert file to Base64 string
      reader.readAsDataURL(file); 
    } else {
      alert("Please upload a valid image file (jpg, png, etc.).");
      e.target.value = ""; 
    }
  };

  return (
    <div className="pt-6 bg-blue-400 h-[115vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[400px] mt-24 mb-24px"
      >
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1>

        <input type="text" name="title" placeholder="Book Title" className="border p-2 rounded" value={bookDetails.title} onChange={handleChange} required/>

        <input type="text" name="author" placeholder="Author Name" value={bookDetails.author} className="border p-2 rounded" onChange={handleChange} required/>

        <textarea className="border p-2 rounded" name="description"placeholder="Book Description" value={bookDetails.description} onChange={handleChange} required/>

        <input className="border p-2 rounded" placeholder="Rating (e.g., 4.5)" type="number" step="0.1" name="rating" max={5} min={0} value={bookDetails.rating} onChange={handleChange} required/>

        <input type="text" name="category" placeholder="Category (e.g., Fiction)" className="border p-2 rounded" value={bookDetails.category} onChange={handleChange} required/>

        <label>Book Image</label>
        <input type="file" accept="image/*"onChange={handleImageUpload} required/>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;
