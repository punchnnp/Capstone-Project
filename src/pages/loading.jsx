import { Nav } from "../components";
import { LoadingSec } from "../sections";

const Loading = () => {
    return (
        <main className='relative h-full bg-background'>
            <Nav />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <LoadingSec />
            </section>
        </main>
    );
};

export default Loading;