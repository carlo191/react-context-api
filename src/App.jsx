import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Contexts
import { PostContextProvider } from "./contexts/PostsContext";

// Layouts
import DefaultLayout from "./Layouts/DefaultLayout";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

// Post pages
import PostCard from "./Pages/Posts/PostCard";
import PostPage from "./Pages/Posts/PostPage";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
            <Route path="/posts">
              <Route index Component={PostPage}></Route>
              <Route path=":id" Component={PostCard}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;