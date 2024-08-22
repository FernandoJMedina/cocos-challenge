import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "./components/root/root";
import Home from "./screens/home";
import Search from "./screens/search";

export default function App() {
  return (
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
}
