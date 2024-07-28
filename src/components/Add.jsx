import axios from 'axios'
import React, { useState } from 'react'

const AddPost = () => {
    const [data,setdata] = useState(
        {"Message":"","userId":sessionStorage.getItem("userId")}
    )
    const inputHandler=(event)=>{
        setdata({...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/add",data,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
          }).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                    alert("SUCCESSFULLY ADDED")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
      }
  return (
    <div>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">POST A MESSAGE</label>
                        <textarea name="Message" id="" cols="30" rows="10" className="form-control" value={data.Message} onChange={inputHandler}></textarea>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>POST</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost