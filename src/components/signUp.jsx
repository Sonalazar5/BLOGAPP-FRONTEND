import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data,setdata] = useState(
        {
            "name":"",
            "dob":"",
            "gender":" ",
            "email":"",
            "password":"",
            "confirm":""
        }
    )
    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
        if(data.password==data.confirm)
        {
            alert("PASSWORD AND CONFIRM PASSWORD ARE SAME")
          console.log(data)
          axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                 sessionStorage.setItem("token",response.data.token)
                 sessionStorage.setItem("userid",response.data.userid)
                 navigate("/add")
                } else {
                    alert("ERROR")
                }
            }
        

        ).catch()
        }
        else{
            alert("ERROR IN PASSWORD")
        }
      }
      let navigate =useNavigate()
  return (
    <div>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">GENDER</label>
                        <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="email" name="email" id="" className="form-control"  value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                        <input type="password" name="confirm" id="" className="form-control" value={data.confirm} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SIGNUP</button>
                        </div>
                        </center>
                        <div>
                        <center>
                       <Link class="nav-link" to="/">LOGIN</Link>
                    </center>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp