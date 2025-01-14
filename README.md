# Online Library Application

This is an **online library management** application built with React, Redux, and React Router. It allows users to browse, search, and view details of books across different categories. The application also provides functionality for adding new books to the library.

## Features
### 1.Home Page
- A landing page with a welcome message and a list of book categories (e.g., Fiction, Non-Fiction, Sci-Fi, etc.).
- Displays a list of popular books with a link to view more details.
- Includes a navigation bar with links to "Home," "Browse Books," and "Add Book."

### 2.Browse Books Page
- Browse books across various categories.
- Users can search books by title or author.
- Filter books by category (e.g., Fiction, Non-Fiction, Sci-Fi, Horror, Biography, Mythology, Technology).

### 3. Book Details Page
- Detailed page for each book with its description, rating, and other relevant information.
- Users can access book details by clicking the "More Details" button on the homepage or the browse books page.

### 4. Add Book Page
- A form for adding new books to the library.
- Uses Redux to manage the state of the books list.
- Allows authorized users to add new books to the library, providing book details such as title, author, description, category, and rating.

### 5. 404 Page
- A "404 Not Found" page is shown if the user navigates to a non-existent route.
- Includes a link back to the Home page.


## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd online-library-app
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
    ```bash
   npm run dev
   ```

## Technologies Used
- React for building the user interface.
- Redux for state management, especially to store and manage the book list.
- React Router for managing routing between different pages.
- Tailwind CSS for styling and responsive design.

## License
This project is open-source and available under the [MIT License](./LICENSE).