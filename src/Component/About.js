
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("");
  }

  render() {
    return (
      <div>
        <h1 className="text-4xl font-black mb-4">About</h1>
        <h2 className="text-lg font-semibold mb-6">This is a about component</h2>
        {/* <User name="Aakash Sharma(Function)"/> */}
        <UserClass name="Aakash Sharma(Class)" />
      </div>
    );
  }
}

// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>this is a about component</h2>
//             <User name="Aakash Sharma(Function)"/>
//             <UserClass name="Aakash Sharma(Class)"/>
//         </div>
//     );
// };

export default About;