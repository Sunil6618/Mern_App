import React from 'react'
import axios from 'axios';


const Home = () => {
    const [user,setUser] = React.useState([]);
    React.useEffect(()=>{
        fetchData();

    },[]);
    const fetchData = ()=>{
        axios.get('/User/showdata').then((res)=>{
            setUser(res.data.Data);
         });
    }
    const UserDelete = (id) =>{
        axios.delete('/User/deluser/'+id).then((res)=>{
            console.log(res)
            fetchData();
        })
        console.log(id)
    }
  return (
    <div>
        <h1>Home</h1>
        {
            user.map((item,index)=>(
                <div key={index}>
                    <h1>{item.username}  {item.mobileno} </h1>
                    <button>Edit</button>
                    <button onClick={()=>{UserDelete(item._id)}}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home