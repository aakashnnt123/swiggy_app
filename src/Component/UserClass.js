 import React from "react";
 import './User.css';
 class UserClass extends React.Component{
    constructor(props){
        super(props);
         this.state ={
            Count:0,
            // Count2:2,
         };
    }
    render(){
        // eslint-disable-next-line no-unused-vars
        const{Count} = this.state
        return(
        <div className="user-card">
            <h1> Count:{this.state.Count}</h1>
            <button 
             onClick={()=>{
                this.setState({
                    Count:this.state.Count+1,
                });
            }}
            >Count_Increse</button>
            <button 
             onClick={()=>{
                this.setState({
                    Count:this.state.Count-1,
                });
            }}
            >Count_Decrese</button>
            {/* <h1> Count:{this.state.Count2}</h1> */}
         <h2>Name:{this.props.name}</h2>
         <h3>Location:Chandigarh</h3>
         <h4>Contact:aakash5427896@gmail.com</h4>
           </div>
        );
    }
 }

 export default UserClass;