import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav, ModalUpload } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import { Home, Loading, Result, Edit } from "./pages";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/load" element={<Loading />} />
          <Route path="/result" element={<Result />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;