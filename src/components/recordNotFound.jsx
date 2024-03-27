import { video } from "../assets/icons";

const RecordNotFound = () => {
    return (
        <div className="flex flex-col min-h-screen mt-60 items-center gap-4 max-container">
            <img className="" src={video} />
            <h1 className="text-3xl font-montserrat text-primary-text">Videos not found</h1>
        </div>
    );
};

export default RecordNotFound;