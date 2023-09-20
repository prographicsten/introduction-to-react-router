import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const nevigate = useNavigate();

    const handleGoBack = () => {
        nevigate('/');
    };

    return (
        <div>
            <h2 className="text-center">Oops!</h2>
            <p className="text-center mx-auto"><i>{error.statusText || error.message}</i></p>
            <div className="text-center">
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p onClick={handleGoBack}>Go Back</p>
                </div>
            }
            </div>
        </div>
    );
};

export default ErrorPage;