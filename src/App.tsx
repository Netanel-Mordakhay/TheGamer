import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewsArticlePage from "./pages/NewsArticlePage";
import ReviewArticlePage from "./pages/ReviewArticlePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<NewsArticlePage />} />
        <Route path="/reviews/:id" element={<ReviewArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
