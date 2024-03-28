import { Result2 } from "../sections";
import { Nav } from "../components";

const Result = () => {
    return (
        <main className='relative bg-background'>
            <Nav />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <Result2 />
            </section>
        </main>

    );
};

export default Result;