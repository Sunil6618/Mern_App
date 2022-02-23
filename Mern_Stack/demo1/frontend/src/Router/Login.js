import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const [user,setUser] = React.useState({
        username:'',
        password:'',
       
    });
    const nav = useNavigate();
    const LoginCheck =() =>{
       axios.post('/User/login',user).then((res)=>{
        if(res.data.data.length === 1){
            nav('/Home',{replace:true})
        }else{
            console.log("username ....");
        }
       })
         
    
        console.log(user);
    }
  return (
    <div><h1>Login</h1>
    <input type={"text"} placeholder ="Enter The User Name "  onChange={(e)=>{setUser({...user,username:e.target.value})}} /><br/>
    <input type={"password"} placeholder ="Enter The  Password "  onChange={(e)=>{setUser({...user,password:e.target.value})}} /><br/>
        <button onClick={()=>{LoginCheck();}}>Submit</button><br/>
        <label>Click :- <NavLink to={"/Reg"}>Click Here</NavLink> </label>
    </div>
    
  )
}

export default Login