import { Link } from "react-router-dom";

 

const ErrorElement = () => {
    return (
        <div>
            <h1>Oops!!</h1>
            <Link><button>Go to Back Home</button></Link>
        </div>
    );
};

export default ErrorElement;