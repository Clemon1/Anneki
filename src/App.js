import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import Navbar from "./Components/navbar";
import LeftSidebar from "./Components/leftSidebar";
import Rightsidebar from "./Components/rightSidebar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Layout } from "antd";
import BottomNavigation from "./Components/bottomNav";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Profile from "./Pages/profile";
function App() {
  return (
    <div className='App'>
      <Layout>
        <LeftSidebar />
        <Layout
          className='site-layout'
          style={{
            marginLeft: 300,
          }}>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
          <BottomNavigation />
        </Layout>
        <Rightsidebar />
      </Layout>
    </div>
  );
}

export default App;
