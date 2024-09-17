import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Oops!!!</h1>
      <h2 className="text-2xl font-bold mb-2">Something Went Wrong!!</h2>
      <h3 className="text-lg font-bold mb-4">{err.status} : {err.statusText}</h3>
      <p className="text-gray-600 mb-4">Sorry, an error occurred while navigating to the requested page.</p>
      <Link to="/" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">Try Again</Link>
    </div>
  );
};

export default Error;