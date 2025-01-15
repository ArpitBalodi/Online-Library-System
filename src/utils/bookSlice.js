import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        // Fiction:
            items: [
        {
            id: "1",
            image: "/images/To_Kill_a_Mockingbird.webp",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A novel about the serious issues of race, class, and gender in the American South.",
            rating: 4.8,
            category: "Fiction",
          },
          {
            id: "2",
            image: "/images/The_Great_Gatsby.jpg",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A tragic story of love, wealth, and betrayal in the Roaring Twenties.",
            rating: 4.4,
            category: "Fiction",
          },
          {
            id: "3",
            image: "/images/Pride_prejudice.webp",
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "A classic tale of love, class, and misunderstandings.",
            rating: 4.6,
            category: "Fiction",
          },
          {
            id: "4",
            image: "/images/George_Orwell.jpg",
            title: "1984",
            author: "George Orwell",
            description: "A dystopian novel about a totalitarian regime that uses surveillance to control its citizens.",
            rating: 4.7,
            category: "Fiction",
          },
          {
            id: "5",
            image: "/images/The_Catcher_in_the_Rye.jpg",
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            description: "A story about teenage rebellion and alienation.",
            rating: 4.2,
            category: "Fiction",
          },

        //   Non-Fiction
        {
            id: "6",
            image: "/images/Sapiens.jpg",
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            description: "An exploration of the history and impact of Homo sapiens on Earth.",
            rating: 4.7,
            category: "Non-fiction",
          },
          {
            id: "7",
            image: "/images/Educated.jpg",
            title: "Educated",
            author: "Tara Westover",
            description: "A memoir of resilience and self-discovery despite an isolated upbringing.",
            rating: 4.8,
            category: "Non-fiction",
          },
          {
            id: "8",
            image: "/images/Atomic_Habits.png",
            title: "Atomic Habits",
            author: "James Clear",
            description: "A guide to building good habits and breaking bad ones.",
            rating: 4.9,
            category: "Non-fiction",
          },
          {
            id: "9",
            image: "/images/Becoming.jpg",
            title: "Becoming",
            author: "Michelle Obama",
            description: "A memoir by the former First Lady of the United States.",
            rating: 4.8,
            category: "Non-fiction",
          },
          {
            id: "10",
            image: "/images/Thinking_Fast_&_Slow.jpg",
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            description: "A groundbreaking exploration of the two systems that drive human thought.",
            rating: 4.6,
            category: "Non-fiction",
          },

        //   Sci-Fi
        {
            id: "11",
            image: "/images/Dune.jpg",
            title: "Dune",
            author: "Frank Herbert",
            description: "A science fiction epic about politics, religion, and power in a desert world.",
            rating: 4.7,
            category: "Sci-Fi",
          },
          {
            id: "12",
            image: "/images/Foundation.jpg",
            title: "Foundation",
            author: "Isaac Asimov",
            description: "The story of a mathematician’s plan to preserve knowledge amid a collapsing empire.",
            rating: 4.5,
            category: "Sci-Fi",
          },
          {
            id: "13",
            image: "/images/Neuromancer.jpg",
            title: "Neuromancer",
            author: "William Gibson",
            description: "A cyberpunk classic that explores the fusion of humanity and technology.",
            rating: 4.3,
            category: "Sci-Fi",
          },
          {
            id: "14",
            image: "/images/The_Left_Hand_of_Darkness.jpg",
            title: "The Left Hand of Darkness",
            author: "Ursula K. Le Guin",
            description: "A groundbreaking exploration of gender and society on an alien world.",
            rating: 4.6,
            category: "Sci-Fi",
          },
          {
            id: "15",
            image: "/images/Snow Crash.jpg",
            title: "Snow Crash",
            author: "Neal Stephenson",
            description: "A satirical cyberpunk novel exploring the convergence of virtual reality and real life.",
            rating: 4.4,
            category: "Sci-Fi",
          },
          {
            id: "16",
            image: "/images/Ender's_Game.jpg",
            title: "Ender's Game",
            author: "Orson Scott Card",
            description: "A young boy's journey as a tactical genius in a battle against an alien race.",
            rating: 4.8,
            category: "Sci-Fi",
          },
          // Biography
          {
            id: "17",
            image: "/images/young_girl.webp",
            title: "The Diary of a Young Girl",
            author: "Anne Frank",
            description: "The poignant diary of Anne Frank, a young Jewish girl hiding during the Nazi occupation.",
            rating: 4.8,
            category: "Biography",
          },
          {
            id: "18",
            image: "/images/steve_jobs.jpg",
            title: "Steve Jobs",
            author: "Walter Isaacson",
            description: "An authorized biography of the visionary entrepreneur behind Apple Inc.",
            rating: 4.7,
            category: "Biography",
          },
          {
            id: "19",
            image: "/images/nelson_mandela.jpg",
            title: "Long Walk to Freedom",
            author: "Nelson Mandela",
            description: "The autobiography of Nelson Mandela, chronicling his fight against apartheid in South Africa.",
            rating: 4.8,
            category: "Biography",
          },
          {
            id: "20",
            image: "/images/malala.jpg",
            title: "I Am Malala",
            author: "Malala Yousafzai",
            description: "The story of Malala Yousafzai, the youngest Nobel Prize laureate, and her fight for education.",
            rating: 4.7,
            category: "Biography",
          },
          // Horror
          {
            id: "21",
            image: "/images/the_shining.jpg",
            title: "The Shining",
            author: "Stephen King",
            description: "A chilling tale of a family's winter at an isolated hotel haunted by supernatural forces.",
            rating: 4.8,
            category: "Horror"
          },
          {
            id: "22",
            image: "/images/dracula.jpg",
            title: "Dracula",
            author: "Bram Stoker",
            description: "The classic gothic tale of Count Dracula's attempt to move from Transylvania to England.",
            rating: 4.7,
            category: "Horror"
          },
          {
            id: "23",
            image: "/images/it.jpg",
            title: "It",
            author: "Stephen King",
            description: "A terrifying story about a group of children who face off against a shapeshifting monster.",
            rating: 4.6,
            category: "Horror"
          },
          {
            id: "24",
            image: "/images/haunting_hill.jpg",
            title: "The Haunting of Hill House",
            author: "Shirley Jackson",
            description: "A psychological horror novel about a group of people investigating a haunted mansion.",
            rating: 4.5,
            category: "Horror"
          },
          // Mystery
          {
            id: "25",
            image: "/images/gone_girl.jpg",
            title: "Gone Girl",
            author: "Gillian Flynn",
            description: "A psychological thriller about a man who becomes the prime suspect in his wife's disappearance.",
            rating: 4.5,
            category: "Mystery"
          },
          {
            id: "26",
            image: "/images/da_vinci.jpg",
            title: "The Da Vinci Code",
            author: "Dan Brown",
            description: "A symbologist uncovers hidden secrets in a thrilling treasure hunt through history and art.",
            rating: 4.7,
            category: "Mystery"
          },
          {
            id: "27",
            image: "/images/big_little_lies.jpg",
            title: "Big Little Lies",
            author: "Liane Moriarty",
            description: "A modern mystery involving secrets, lies, and a shocking murder.",
            rating: 4.4,
            category: "Mystery"
          },
          // Mythology
          {
            id: "28",
            image: "/images/krishna.jpg",
            title: "The Krishna Key",
            author: "Ashwin Sanghi",
            description: "A thrilling narrative blending Krishna's mythology with modern-day mystery.",
            rating: 4.5,
            category: "Mythology"
          },
          {
            id: "29",
            image: "/images/shiva_trilogy.jpg",
            title: "Shiva Trilogy: The Immortals of Meluha",
            author: "Amish Tripathi",
            description: "A fictionalized tale of Lord Shiva's journey from a tribal leader to a revered god.",
            rating: 4.8,
            category: "Mythology"
          },
          {
            id: "30",
            image: "/images/circe.jpeg",
            title: "Circe",
            author: "Madeline Miller",
            description: "A reimagining of the story of Circe, the enchantress from Greek mythology.",
            rating: 4.7,
            category: "Mythology"
          },
          {
            id: "31",
            image: "/images/sita.jpg",
            title: "Sita: An Illustrated Retelling of the Ramayana",
            author: "Devdutt Pattanaik",
            description: "A refreshing perspective on the Ramayana through the eyes of Sita.",
            rating: 4.6,
            category: "Mythology"
          },
          {
            id: "32",
            image: "/images/song_of_achilles.jpg",
            title: "The Song of Achilles",
            author: "Madeline Miller",
            description: "A lyrical and romantic retelling of the story of Achilles and Patroclus.",
            rating: 4.8,
            category: "Mythology"
          },
          // Technology
          {
            id: "33",
            image: "/images/clean_code.jpg",
            title: "Clean Code",
            author: "Robert C. Martin",
            description: "A handbook of software craftsmanship for writing clean and maintainable code.",
            rating: 4.9,
            category: "Technology"
          },
          {
            id: "34",
            image: "/images/programatic_programmer.jpg",
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt and David Thomas",
            description: "A guide to becoming a better programmer through pragmatic practices and tools.",
            rating: 4.8,
            category: "Technology"
          },
          {
            id: "35",
            image: "/images/ai.jpg",
            title: "Artificial Intelligence: A Modern Approach",
            author: "Stuart Russell and Peter Norvig",
            description: "The definitive book on AI concepts, techniques, and applications.",
            rating: 4.7,
            category: "Technology"
          },
          {
            id: "36",
            image: "/images/code.jpg",
            title: "Code: The Hidden Language of Computer Hardware and Software",
            author: "Charles Petzold",
            description: "An exploration of the inner workings of computers and software, from the ground up.",
            rating: 4.8,
            category: "Technology"
          }
        ]
        },

    reducers: {
        addBook: (state,action) => {
            state.items.push(action.payload);
        }
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;