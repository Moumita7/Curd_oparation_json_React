// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"

const SimpleForm = () => {
    let [data,setData]=useState([])

    let [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    let handlechange=(e)=>{
       let {name,value}=e.target
    //    console.log(name,value)
       setFormData({
        ...formData,
        [name]:value
       })
        // console.log("name",  e.target.name,"val",e.target.value)
        // setFormData([...formData,e.target.value])

        console.log("fe",formData)

    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{

            await axios.post("http://localhost:3006/simpleForm",formData)
            console.log("data send")
            // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        password:""

      
      });
      getData()
        }catch(err){
            console.log(err)
        }


    }

    let handleDelete=async(id)=>{
        let res=await axios.delete(`http://localhost:3006/simpleForm/${id}`)
        console.log(res.data)
        // setData(res.data)
        getData()
        }

    const getData=async()=>{
            let res=await axios.get("http://localhost:3006/simpleForm")
            // console.log(res.data)
            setData(res.data)
    }
useEffect(()=>{
getData()
// handleDelete()
},[])



// console.log(data)

  return (
    <div className=" flex flex-col  justify-center items-center  mt-20">

    <form className="flex flex-col w-[40%] " onSubmit={handleSubmit}>
            <input className="border" name="name" value={formData.name} type="text" placeholder='name' onChange={handlechange}  />
            <input className="border" name="email" value={formData.email} type="email" placeholder='email' onChange={handlechange}/>
            <input className="border" name="password" value={formData.password} type="password"  id="" placeholder='password' onChange={handlechange} />
            <button className="border">Submit</button>
        </form>
 
       <div>
       <table className="border mt-6">
            <tr className="border">
                <th className="border bg-emerald-200">id</th>
                <th className="border  bg-emerald-200">name</th>
                <th className="border  bg-emerald-200">email</th>
                <th className="border  bg-emerald-200">password</th>
            </tr>
            {/* <tr> */}
                {/* <td className="border">1</td>
                <td className="border">mou</td>
                <td className="border">md@gmail</td>
                <td className="border">1234</td> */}
                {
                    data.map((ele,i)=>(
                        <tr key={i}>
                        <td className="border">{ele.id}</td>
                        <td className="border">{ele.name}</td>
                        <td className="border">{ele.email}</td>
                        <td className="border">{ele.password}</td>
                        <button className="border p-2">edit</button>
                        <button className="border p-2" onClick={()=>handleDelete(ele.id)}>delete</button>
                      

                        </tr>
                    ))
                }
            {/* </tr> */}
        </table>
       </div>

        
    </div>
  )
}

export default SimpleForm