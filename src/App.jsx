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
    // <main className='relative bg-background'>
    //   <Nav />
    //   <section className='xl:padding-l wide:padding-r padding-b'>
    //     <Hero />
    //   </section>
      
    //   <section className='padding'>
    //     <PopularProducts />
    //   </section>
    //   <section className='padding'>
    //     <SuperQuality />
    //   </section>
    //   <section className='padding-x py-10'>
    //     <Services />
    //   </section>
    //   <section className='padding'>
    //     <SpecialOffer />
    //   </section>
    //   <section className='bg-pale-blue padding'>
    //     <CustomerReviews />
    //   </section>
    //   <section className='padding-x sm:py-32 py-16 w-full'>
    //     <Subscribe />
    //   </section>
    //   <section className=' bg-black padding-x padding-t pb-8'>
    //     <Footer />
    //   </section>
    
    // </main>
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