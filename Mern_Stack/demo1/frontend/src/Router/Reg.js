import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import axios  from 'axios';
const Reg = () => {
    const [user,setUser] = useState({
        username:'',
        password:'',
        mobileno:''
    });
    const LoginCheck =() =>{
        axios.post('/User/Reguser',user).then((req,res)=>{
         console.log(res);
        })
        console.log(user);
    }
  return (
    <div><h1>Reg</h1>
    <input type={"text"} placeholder ="Enter The User Name "  onChange={(e)=>{setUser({...user,username:e.target.value})}} /><br/>
    <input type={"password"} placeholder ="Enter The  Password " onChange={(e)=>{setUser({...user,password:e.target.value})}} /><br/>
    <input type={"number"} placeholder ="Enter The  Mobile No " onChange={(e)=>{setUser({...user,mobileno:e.target.value})}} /><br/>
        <button onClick={()=>{LoginCheck();}}>Submit</button><br/>
        <label>Click :- <NavLink to={"/"}>Click Here</NavLink> </label>
    </div>
  )
}

export default Reg