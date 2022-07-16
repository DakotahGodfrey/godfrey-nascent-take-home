import "styles/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "pages/User";
import Pokedex from "pages/Pokedex";
import Confirm from "pages/Confirm";
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<User />}></Route>
          <Route path={"/pokedex"} element={<Pokedex />}></Route>
          <Route path={"/confirm"} element={<Confirm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
