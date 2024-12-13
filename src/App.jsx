import { BrowserRouter, Routes, Route } from "react-router-dom";

// # Contexts
import { PostsContextProvider } from "./contexts/PostsContext";

// # Layout
import DefaultLayout from "./layouts/DefaultLayout";

// # Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PostsPage from "./pages/PostsPage";
import ShowPost from "./pages/ShowPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={About} />
            <Route path="/posts" Component={PostsPage} />
            <Route path="/posts/:id" Component={ShowPost} />
            <Route path="/not-found" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
