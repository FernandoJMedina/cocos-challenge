import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import Root from "./routes/root";
import Search from "./routes/search";

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
