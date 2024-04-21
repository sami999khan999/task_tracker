import React from "react";
import Home from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import CreateNew from "./pages/Create";
import NewTasks from "./pages/NewTasks";
import InProgress from "./pages/InProgress";
import Completed from "./pages/Completed";
import Canceled from "./pages/Canceled";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnew" element={<CreateNew />} />
        <Route path="/newtask" element={<NewTasks />} />
        <Route path="inprogress" element={<InProgress />} />
        <Route path="completed" element={<Completed />} />
        <Route path="canceled" element={<Canceled />} />
      </Routes>
    </div>
  );
};

export default App;
