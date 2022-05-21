import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import FavList from "./components/favList/FavList";
import Home from "./components/home/Home";
function App() {
  return (
    <>

      <NavBar />
      <h1>Welcome to Movie  websit</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>


    </>
  );
}

export default App;
