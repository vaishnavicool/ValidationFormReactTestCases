import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormExampleForm from "./Form/Form";
import { Counter } from "./Pages/Counter/Counter";
import { Posts } from "./Pages/Posts/Posts";
import { DeliveryOptions } from "./AriaLabel/DeliveryOptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/delivery" element={<DeliveryOptions />} />
        <Route path="/form" element={<FormExampleForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
