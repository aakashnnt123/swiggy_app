
import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>this is a about component</h2>
            <User name="Aakash Sharma(Function)"/>
            <UserClass name="Aakash Sharma(Class)"/>
        </div>
    );
};

export default About;