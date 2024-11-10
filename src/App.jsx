import React from "react";
import { Route, Routes } from "react-router-dom";

import Gallery_Layout from "./components/Layout/Gallery_Layout";

import Home from "./components/Home/Home";
import Upload2 from "./components/Image/Upload2";
import Gallery2 from "./components/Image/Gallery2";
import ShowData from "./components/Image/ShowData";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Gallery_Layout>
            <Home />
          </Gallery_Layout>
        }
      />
      <Route
        path='/upload'
        element={
          <Gallery_Layout>
            <Upload2 />
          </Gallery_Layout>
        }
      />
      <Route
        path='/gallery'
        element={
          <Gallery_Layout>
            <Gallery2 />
          </Gallery_Layout>
        }
      />
      <Route
        path='/profile/:studentId'
        element={
          <Gallery_Layout>
            <ShowData />
          </Gallery_Layout>
        }
      />
    </Routes>
  );
}

export default App;
