import { Coming_soon_URL } from "../Util/Constants";

const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <h1 className="text-3xl text-black font-bold mb-8 px-4 text-center">
        Our grocery online store, and we have a lot of child components inside this web page!
      </h1>
      <img
        src={Coming_soon_URL}
        alt="Coming Soon"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Grocery;
