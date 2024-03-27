import { Link } from "react-router-dom";

 

const ErrorElement = () => {
    return (
        <div className="lg:mx-[600px] text-center lg:my-48">
            <img className="w-96 rounded-lg mb-4" src="https://i.ibb.co/3Rg0QtX/404-page-cover.jpg" alt="" />
            <Link><button className="bg-emerald-700 text-white w-32 h-10 rounded-xl">Go Back</button></Link>
        </div>
    );
};

export default ErrorElement;