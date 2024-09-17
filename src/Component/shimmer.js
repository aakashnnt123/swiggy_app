// import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center mb-4 mt-24 ">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="shimmer-cards p-4 m-6 w-[260px] h-[380px]  bg-gray-200 rounded-md shadow-md mx-2 mb-4 overflow-hidden relative"
        >
          <div className="shimmer-effect absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;




// import './Shimmer.css';
// const Shimmer = () => {
//     return (
//     <div className="shimmer-container">
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"></div>
//       </div>
//   );
// };

// export default Shimmer;