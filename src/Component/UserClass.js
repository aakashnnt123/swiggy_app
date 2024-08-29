 import React from "react";
 import './User.css';
 import { Component } from "react";
 class UserClass extends Component{
    constructor(props){
        super(props);
         this.state ={
            // Count:0,
            // // Count2:2,
            userInfo:{
                name:"dummy",
                location:"default",
                avatar_url:"null",
            }
         };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aakashnnt123")

    const json = await data.json();

    this.setState({
        userInfo:json,
    });
     console.log(json);
   }
   
    render(){
        // eslint-disable-next-line no-unused-vars
        const{name , location , avatar_url} = this.state.userInfo
        return(
        <div className="user-card">
            {/* <h1> Count:{Count}</h1> */}
            {/* <button 
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
            >Count_Decrese</button> */}
            {/* <h1> Count:{this.state.Count2}</h1> */}
        <img src={avatar_url} alt="img"/>
         <h2>Name:{name}</h2>
         <h3>Location:{location}</h3>
         <h4>Contact:aakash5427896@gmail.com</h4>
           </div>
        );
    }
 }

 export default UserClass;