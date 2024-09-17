 import React from "react";
//   import './User.css';
  import { Component } from "react";
  class UserClass extends Component{
    constructor(props){
        super(props);
         this.state ={
            // Count:0,            // // Count2:2,
            userInfo:{
                name:"dummy",
                location:"default",
               avatar_url:"null",
           }
         };    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aakashnnt123")

    const json = await data.json();

    this.setState({
        userInfo:json,    });
     console.log(json);
   }
   
    render(){
        // eslint-disable-next-line no-unused-vars
        const{name , location , avatar_url} = this.state.userInfo
        return(
            <div className="user-card p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-[300px] flex flex-col items-center justify-center">
            <img className="rounded-full w-24 h-24 object-cover border-4 border-orange-500 mb-4" src={avatar_url} alt="User Avatar"/>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Name: {name}</h2>
            <h3 className="text-gray-600 mb-2">Location: {location}</h3>
            <h4 className="text-gray-500">Contact: <a href="mailto:aakash542786@gmail.com" className="text-orange-500 hover:underline">aakash542786@gmail.com</a></h4>
          </div>
          
         ); }
 }

 export default UserClass;