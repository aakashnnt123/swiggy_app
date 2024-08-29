
import { useState } from 'react';
import './User.css';


const User = (props)=>{
    const[Count , SetCount] = useState(0);
    // const INC = () =>{
    //     SetCount(Count+1);
        
    // }
    // const INC2 = () =>{
    //     SetCount(Count-1);
        
    // }
    // const[Count2 , SetCount2] = useState(1);

    return(
    <div className="user-card">
        <h1>Count = {Count}</h1>
        {/* <h1>Count = {Count2}</h1> */}
        <h2>Name:{props.name}</h2>
        <h3>Location:Chandigarh</h3>
        <h4>Contact:aakash5427896@gmail.com</h4>
        <button  onClick={()=>{
            SetCount(Count+1);
        }
        }>Click me(INC)</button>

<button  onClick={()=>{
            SetCount(Count-1);
        }
        }>Click me(DeC)</button>
    </div>
    );
};

export default User;