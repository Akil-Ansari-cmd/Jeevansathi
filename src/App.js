import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Matrimony from "./Component";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Header/Login";
import Home from "./Component/Home/Home";
import Profile from "./Component/Dashboard/Profile";
import Activity from "./Component/Dashboard/Activity";
import Search from "./Component/Dashboard/Search";

function App() {
  return (
    <>
   <BrowserRouter>
   
    <Routes>
    <Route path="/" element={<Matrimony/>}/>
    <Route path="/head" element={<Login/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
    <Route path="/prof" element={<Profile/>}/>
    <Route path="/Acti" element={<Activity/>}/>
    <Route path="/Search" element={<Search/>}/>
    </Routes>
   </BrowserRouter>
   </>
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
  );
}

export default App;
