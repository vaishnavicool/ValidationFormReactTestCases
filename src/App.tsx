import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Pages/Counter/Counter";
import { Posts } from "./Pages/Posts/Posts";
import { NearByStore } from "./Pages/sdd/NearByStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/nearbyStores" element={<NearByStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
