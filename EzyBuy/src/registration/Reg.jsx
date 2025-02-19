import React, { useState } from "react";
import './Reg.css'
import axios from 'axios'
import{ SnackbarProvider, enqueueSnackbar} from 'notistack'; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Reg(){
    const [name ,setName]=useState()
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
            e.preventDefault()

            if (!name){
                enqueueSnackbar('Please enter your name',{
                    variant: 'error',
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
                return;
            }
            if (!email) {
                enqueueSnackbar('Please enter your email',{
                    variant: 'error',
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
                return;
            }
            if (!password){
                enqueueSnackbar('Please enter your password',{
                    variant: 'error',
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
                return;
            }
            axios.post('http://localhost:3001/auth/signup', {name , email , password })
            .then(result => console.log(result))
            .catch(error => console.log(error))
            navigate('/Login')
    }
return(
<>
    <SnackbarProvider/>
<div className="main-box">
    <form onSubmit={handleSubmit}>
        <div className="box1">
             <h2>Registrartion</h2>
             <label>Name</label>
             <input type="text" onChange={(e) => setName(e.target.value)}/><br />

                <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/><br />

                <label>Password</label>
                      <input type="Password" onChange={(e) => setPassword(e.target.value)}/><br /> 
               
                     <button className="btn">Register</button>
                     <div className="line" >
            <hr />
            <p>Already Have An Account? <Link to="/Login">Login</Link>
            </p>
        </div>
        
        </div>
        </form>
</div>
    
</>
);
}
export default Reg