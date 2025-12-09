import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BookRegister from "./pages/BookRegister";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookDetail from "./components/BookDetail";
import ProfilePage from "./pages/ProfilePage";
import ProfileEdit from "./pages/ProfileEdit";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks((prev) => [
            ...prev,
            { id: Date.now(), ...book },
        ]);
    };

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home books={books} />} />
                <Route
                    path="/book-register"
                    element={<BookRegister addBook={addBook} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route path="/:bookId" element={<BookDetail />} />
            </Routes>
        </Layout>
    );
}

export default App;
