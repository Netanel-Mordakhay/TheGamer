import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewsArticlePage from "./pages/NewsArticlePage";
import ReviewArticlePage from "./pages/ReviewArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import ScrollToTop from "./components/Globals/ScrollToTop";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultLayout>
        <Routes>
          <Route
            path="/articles"
            element={<ArticleListPage key="articles" />}
          />
          <Route path="/reviews" element={<ArticleListPage key="reviews" />} />
          <Route path="/articles/:id" element={<NewsArticlePage />} />
          <Route path="/reviews/:id" element={<ReviewArticlePage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
