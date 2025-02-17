import {useState} from "react";
import './Login.css'
import { SnackbarProvider, enqueueSnackbar} from 'notistack'; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";

function Login(){
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => 
        {

            e.preventDefault()

            if (!email) {
                enqueueSnackbar('Please enter you email',{
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
            axios.post('http://localhost:3001/Login',{ email , password })
            .then(result => {
               console.log(result)
            //    if(result.data === "Welcome")
            //    {
            //         alert('Welcome user')
            //         navigate('/home')
            //    }
               if (result.data === "Welcome"){
                const i=3500;
                enqueueSnackbar('Welcome user',{
                    variant: 'success',
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
                setTimeout(() => {
                    navigate('/home');
                  }, i);
            }
               else{
                const i=3500;
                enqueueSnackbar('youre not a user',{
                    variant: 'error',
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
                setTimeout(() => {
                    navigate('/register');
                  }, i);
               }
            })
            .catch(error => console.log(error))
        }
return(
<>
    <SnackbarProvider/>
    <div className="main-box">
        <form onSubmit={handleSubmit}>
         <div className="box1">
             <h2>Login</h2>
                <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/><br />
                <label>Password</label>
                      <input type="Password" onChange={(e) => setPassword(e.target.value)}/><br /> 
                      <a href="#">Forgot Password?</a><br />
                     <button className="btn">Login</button>
                     <div className="line" >
            <hr />
            <p>Don't Have An Account.?
                <Link to='/register'> Create An Account</Link>
            </p>
        </div>
        
        </div>
    </form>   
</div>
    
</>
    );
}
export default Login