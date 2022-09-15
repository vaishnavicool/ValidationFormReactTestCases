import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Pages/Counter/Counter";
import { Posts } from "./Pages/Posts/Posts";
import { DeliveryOptions } from './Pages/sdd/DeliveryOptions/DeliveryOptions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/delivery" element={<DeliveryOptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
