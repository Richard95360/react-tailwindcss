import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<Post />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;