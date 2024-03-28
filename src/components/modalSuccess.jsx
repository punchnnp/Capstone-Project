import { close, checkCircle } from "../assets/icons";

const ModalSuccess = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] justify-center">
                <div className="w-full bg-white rounded-lg shadow-md items-center px-4 pt-4 pb-8 space-y-4">
                    <div className="w-full flex justify-end">
                        <div onClick={() => onClose()}>
                            <img className="w-[20px] h-[20px]" src={close} />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-xl leading-6 font-montserrat font-medium text-primary-text">Download Complete!</h3>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <img className="w-[80px] h-[80px]" src={checkCircle} />
                            <p className="font-montserrat text-l text-gray-500">YourGreatMoment.gif has been downloaded successfully.</p>
                            <p className="font-montserrat text-l text-gray-500">Go check it out :)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalSuccess;