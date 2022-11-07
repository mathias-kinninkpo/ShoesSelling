import { useState } from 'react'
import {TiltleLogin,Hdr} from './Main/Register'
import {Error} from './Main/Register'
import{ useNavigate} from 'react-router'
import { useEffect,useContext } from 'react'
import {CheckoutContext, ConnexionContext} from './Context'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart'
import { faL } from '@fortawesome/free-solid-svg-icons'


export default function Login(){

    const showToastMessage = () => {
        toast.success('The payment has been made successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    function sleep(time){
        return new Promise((re) => setTimeout(re,time))
    }

    const {handleConnexion} = useContext(ConnexionContext)

    const {isConnected} = useContext(CheckoutContext)

    const navigate = useNavigate()

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password:''
    })
    const [success , setSuccess] = useState(null)

    const [view, setView] = useState(false)

    function handleChange(event){
        const { name , value } = event.target;
        setLoginInfo(prev => ({...prev, [name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        const data = JSON.parse(localStorage.getItem('data'))
        
        if (data.email === loginInfo.email && data.password=== loginInfo.password){
            localStorage.setItem('con', 'true')
            setSuccess(true)
           
        }
        else{
            setSuccess(false)
        }
    }
    async function callSleep(){
        return await sleep(5000)
    }
    if (success){
        setSuccess(false)
        function con() {return handleConnexion()}
        con()
        if(isConnected){
            showToastMessage()
            callSleep()
            function redirect(){ return navigate('/Panier/checkout')}
            redirect()  
        }
        else{

            function redirect(){ return navigate('/')}
            redirect() 
        }
       
    }
    return (
        
       <div className ='img-log'>
           <ToastContainer />
           <div className='form'>
                <form className="login" onSubmit = {handleSubmit}>
                <i style = {{color:"white", fontSize:'70px',position:"relative",right:'-13rem'}} class="fa fa-user" aria-hidden="true"></i>
                    <TiltleLogin>login</TiltleLogin>
                   { success == false && <Error>incoret email or password</Error>}
                    <div>
                        <label for='mail'>Email adress</label><br />
                        <input name = 'email' type='email' id='mail' placeholder = "exemple@gmail.com" required onChange = {handleChange}/>
                    </div>
                    <div>
                        <label for='pass'>Password</label><br />
                        <input name = 'password' type={!view ? 'password':'text'} id='pass' onChange = {handleChange}/>
                        <i onClick = {()=> setView(!view)} class="fa fa-eye" aria-hidden="true" style={{fontSize:'25px',backgroundColor:'inherit',position:"relative",right:"35px",zIndex:"2000"}}></i>
                    </div>
                    <div>
                        <Hdr>New here ? <Link to= '/Register'><i style = {{color:'gold'}}>register</i></Link></Hdr><br/> <br />
                        <Hdr>Forgot email ??</Hdr>
                    </div>
                    <button>
                        Login
                    </button>
                </form>
            </div>
       </div>
    )
}