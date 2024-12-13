// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import PostsPage from "./assets/pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ShowPosts from "./assets/pages/ShowPosts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/posts" Component={PostsPage} />
            <Route path="/posts/:id" Component={ShowPosts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
