import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home, Result, Edit } from "./pages";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/result" element={<Result />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;