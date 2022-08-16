import React from "react";
// Routing
import { Route, Routes } from "react-router-dom";
//Redux
import { store } from "./app/store";
import { Provider } from "react-redux";
//Pages
import Home from "./pages/Home";
//Components
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <div className="px-8 py-12 sm:px-40 sm:py-20 flex justify-center items-center flex-col ">
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
