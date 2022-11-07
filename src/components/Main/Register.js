import styled, { keyframes } from 'styled-components'
import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Defile = keyframes `
    from{
      transform: translateX(-60px);
    }
    to{
      transform: translateX(60px);
    }
`

export const Animation = keyframes `
    0%{
      transform: translateY(0px);
    }
    70%{
        transform: translateY(0px);
    }
    75%{
        transform: translateY(-200px);
    }
    85%{
        transform: translateY(0px);
      }
    90%{
      transform: translateY(-100px);
    }
    100%{
        transform: translateY(0px);
    }
`
export const Hdr = styled.span`
    font-size:18px;
    color:#222;
`
export const TiltleLogin = styled.h2`
    background-color: #090a;
    border-radius: 10px;
    padding: 8px;
    color: #f0f0f0;
    border: 1px solid;
    text-align:center;
    paddig:5px;
    animation: ${Defile} 3s linear infinite alternate;

     
`
export const Error = styled.div`
    color:red;
    background-color:#c99;
    padding:10px;
    border-radius:5px;
`





export default function Register(){


    const showToastMessage = () => {
        toast.success('Connected sucessfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const navigate =useNavigate()


    const [success , setSuccess] = useState(0)

    const [view, setView] = useState(false)

    const [info, setInfo] = useState({

        name : '',
        surname : '',
        email: '',
        password: '',
        confirmpass: ''
    })
    function handleChange(event){
        const {name, value} = event.target;
        setInfo(prevData => ({...prevData, [name] : value}))

    }
    async function handleSubmit(event){
        event.preventDefault()
        info.confirmpass === info.password ? setSuccess(1) : setSuccess(-1);
        if(success==1){
            showToastMessage()
            await sleep(5000)
        }
    }
    function sleep(time){
        return new Promise((re) => setTimeout(re,time))
    }
    useEffect(() => {
        setSuccess(success)
        if(success==1){
            localStorage.setItem('data', JSON.stringify(info))
            function redirect(){ return navigate('/login')}
            redirect()

        }
    },[success])

    return (



       <div className = 'img-re'>
           <div className='form'>
                <form className="login" onSubmit = {(event)=> handleSubmit(event)}>
                    <TiltleLogin>Registration</TiltleLogin>
                    {success === -1 && <Error>unconform password</Error>}

                    <div>
                        <label for='name' required>Nom</label><br />
                        <input type='text' id='name' name = 'name' onChange = {handleChange}/>
                    </div> 
                    <div>
                        <label for='surname'>Prenom</label><br />
                        <input type='text' id='surname' name = 'surname'onChange = {handleChange}/>
                    </div>
                <div>
                        <label for='email'>Email adress</label><br />
                        <input name ='email' type='email' id='email' placeholder = "exemple@gmail.com" required onChange = {handleChange}/>
                </div>
                    <div>
                        <label for='password'>Password</label><br />
                        <input name ='password' type={!view ? 'password':'text'} id='password' onChange = {handleChange}/>
                        <i onClick = {()=> setView(!view)} class="fa fa-eye" aria-hidden="true" style={{fontSize:'25px',backgroundColor:'inherit',position:"relative",right:"35px",zIndex:"2000"}}></i>
                    </div>
                    <div>
                        <label for='confirmpass'>Confirm Password</label><br />
                        <input name ='confirmpass' type={!view ? 'password':'text'} id='confirmpass' onChange = {handleChange}/>
                        <i onClick = {()=> setView(!view)} class="fa fa-eye" aria-hidden="true" style={{fontSize:'25px',backgroundColor:'inherit',position:"relative",right:"35px",zIndex:"2000"}}></i>
                </div>
                <Hdr>Have alrady account ? <Link to= '/Login'><i style = {{color:'gold'}}>login</i></Link></Hdr><br/> <br />
                <button>Sign Up</button>

                </form>

            </div>
       </div>
    )
}