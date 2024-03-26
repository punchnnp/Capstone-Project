import { LoadingSection } from "../sections";
import { Nav } from "../components";

const Loading = () => {
    return (
        <main className='relative h-full bg-background'>
            <Nav />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <LoadingSection />
            </section>
        </main>
    );
};

export default Loading;