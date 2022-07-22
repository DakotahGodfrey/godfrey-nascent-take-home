import "styles/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "pages/UserPage";
import Pokedex from "pages/Pokedex";
import Confirm from "pages/Confirm";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserPage />}></Route>
          <Route path={"/pokemon"} element={<Pokedex />}></Route>
          <Route path={"/confirm"} element={<Confirm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
