// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BookRegister from "./pages/BookRegister";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookDetail from "./components/BookDetail";
import ProfilePage from "./pages/ProfilePage";
import ProfileEdit from "./pages/ProfileEdit";
// 나중에 AuthProvider 쓸 거면 이 줄 살려두고, 아니면 지워도 됨
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-register" element={<BookRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/:bookId" element={<BookDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;