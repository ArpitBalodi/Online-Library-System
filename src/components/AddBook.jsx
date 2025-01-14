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
    setBookDetails({...bookDetails,[e.target.name]: e.target.value,});
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
          image: reader.result, // Convert image to Base64
        }));
        setImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file); // Convert file to Base64 string
    } else {
      alert("Please upload a valid image file (jpg, png, etc.).");
      e.target.value = ""; // Clear the file input
    }
  };

  return (
    <div className="pt-6 bg-blue-400 h-[115vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[400px] mt-24 mb-24px"
      >
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1>

        <input type="text" name="title" placeholder="Book Title"
          value={bookDetails.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required/>

        <input type="text" name="author" placeholder="Author Name" value={bookDetails.author}
          onChange={handleChange}
          className="border p-2 rounded"
          required/>

        <textarea name="description"placeholder="Book Description"
          value={bookDetails.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required/>

        <input type="number" step="0.1" name="rating" placeholder="Rating (e.g., 4.5)" max={5} min={0}
          value={bookDetails.rating}
          onChange={handleChange}
          className="border p-2 rounded"
          required/>

        <input type="text" name="category" placeholder="Category (e.g., Fiction)"
          value={bookDetails.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <label>Book Image</label>
        <input type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;
