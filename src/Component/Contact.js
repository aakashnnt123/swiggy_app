// rafce
// const Contact = () =>{
//     return(
//         <div>
//             <h1 className="text-3xl font-bold mb-4">Contact us page</h1>
//         </div>
//     );
// };

// export default Contact;

const Contact = () => {
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">Contact Us</h1>
            <div className="flex flex-wrap justify-center mb-8">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out to us.
                    </p>
                    <form>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                            rows="5"
                        ></textarea>
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Address</h2>
                    <p className="text-gray-600 mb-4">123, Gourmet Street, Foodie City, India - 456789</p>
                    <p className="text-gray-600 mb-4">📞 Phone: +91 1234-567-890</p>
                    <p className="text-gray-600 mb-4">✉️ Email: <a href="mailto:support@foodvillage.com" className="text-orange-500 hover:underline">support@foodvillage.com</a></p>
                    <h3 className="text-2xl font-semibold mt-8 text-gray-800">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        {/* <a href="" className="text-orange-500 hover:text-orange-700 text-2xl"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="" className="text-orange-500 hover:text-orange-700 text-2xl"><i className="fab fa-twitter"></i> Twitter</a>
                        <a href="" className="text-orange-500 hover:text-orange-700 text-2xl"><i className="fab fa-facebook"></i> Facebook</a> */}

                        <ul>
                               <li className="text-orange-500 hover:text-orange-700 text-2xl" fab fa-instagram> Instagram</li>
                               <li className="text-orange-500 hover:text-orange-700 text-2xl"fab fa-twitter > Twitter</li>
                               <li className="text-orange-500 hover:text-orange-700 text-2xl"fab fa-facebook > Facebook</li>
                               
                    
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};
  
  export default Contact;
  