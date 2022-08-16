import React from "react";
// Routing
import { Route, Routes } from "react-router-dom";
//Redux
import { store } from "./app/store";
import { Provider } from "react-redux";
//Pages
import Home from "./pages/Home";



const App = () => {
  return (
    <div className="text-center px-8 py-12 sm:px-40 sm:py-20">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
