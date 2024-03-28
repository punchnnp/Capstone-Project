import { VideoEditor, Nav } from "../components"

const Edit = () => {
    return (
        <main className='relative bg-background'>
            <Nav />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <VideoEditor />
            </section>
        </main>
    );
};

export default Edit;