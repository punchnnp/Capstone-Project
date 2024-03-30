import { Nav } from "../components";
import { Hero } from "../sections";

const Home = () => {
  return (
    <main className='relative bg-background'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
    </main>
  );
};

export default Home;