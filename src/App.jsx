import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import Canceled from "./pages/Canceled";
import Completed from "./pages/Completed";
import CreateNew from "./pages/Create";
import Home from "./pages/Dashboard";
import InProgress from "./pages/InProgress";
import NewTasks from "./pages/NewTasks";
import Root from "./pages/Root";

const App = () => {
  return (
    <main className="root">
      <MobileNav />
      <Root>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createnew" element={<CreateNew />} />
          <Route path="/newtask" element={<NewTasks />} />
          <Route path="inprogress" element={<InProgress />} />
          <Route path="completed" element={<Completed />} />
          <Route path="canceled" element={<Canceled />} />
        </Routes>
      </Root>
    </main>
  );
};

export default App;
