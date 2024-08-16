import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center mt-32 space-y-4">
            <h1 className="font-bold text-5xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <button onClick={() => navigate("/")} className="btn ">Home</button>
        </div>
    );
};

export default ErrorPage;