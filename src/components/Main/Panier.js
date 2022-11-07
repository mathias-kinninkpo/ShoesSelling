import { useCart } from "react-use-cart";
import styled, { keyframes } from 'styled-components'
import {Form, Link} from 'react-router-dom'
import {ConnexionContext, CheckoutContext} from '../Context'
import {useContext}from 'react'
import {useNavigate} from 'react-router-dom'

const Modal = keyframes `
    from{
      transform: translateY(-300px);
      opacity:0;
    }
    to{
      opacity:1;
    }
`

const TableWrapper = styled.div`
  width: 70%; 
  margin: 1% auto; 
  background-color: #d0cece;
  padding:2%;
  z-index: 100;
  animation: ${Modal} 1s;
  & *{
    margin: auto;
  }

`
const Exit = styled.span`
  background-color: inherit;
  position: absolute;
  z-index:100;
  right:15%;
  top:3%;
  cursor: pointer;

`

export default function Panier(){

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
      } = useCart();
      const {connected} = useContext(ConnexionContext)
      const {isConnected, checkoutHandler} = useContext(CheckoutContext)
      const navigate = useNavigate()

      function handleCheckout(){
        if(connected){
          navigate('/Panier/checkout')
        }
        else{

          localStorage.setItem('check', 'true')
          checkoutHandler(true)
          alert('You must login !')
          console.log(isConnected)
          navigate('/login')
        }
      }

    
    if (isEmpty) return (

      <div className='cart'>

        < TableWrapper>
          <Link to='/'>
            <Exit>X</Exit>
          </Link> 
            <table>

            <thead>
                  <tr className = 'table-mark'>
                      <th>N°</th>
                      <th>name</th>
                      <th>unit price</th>
                      <th>Quantity</th>
                      <th>Total price</th>
                      <th>Action</th>
                  </tr>
            </thead>
              <tr >
                  <td colSpan = '6'style={{backgroundColor:'#fff'}}><h2 style={{color:'red',backgroundColor:'#fff'}}>Your cart is empty</h2></td>
              </tr>
              <tr className = 'table-mark'>
                  <td className='total'  colSpan = '5'><h4>Total: </h4></td>
                  <td className='total'><h3>{cartTotal} €</h3></td>
              </tr>
            </table>
            <div className='close-table'>
                  <button disabled >CHECK OUT</button>
                  
                  <Link to='/'><button className='closeBtn'>CLOSE</button></Link>
            </div>
        </TableWrapper>
      </div>
    )
    return (
      <div className='cart'>
          <TableWrapper>

               <Link to='/'>
                  <Exit>X</Exit>
               </Link> 
                <table>

                  <thead>
                        <tr className = 'table-mark'>
                            <th>N°</th>
                            <th>name</th>
                            <th>unit price</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Action</th>
                        </tr>
                  </thead>

                  <tbody>
                    {
                        items.map((item,index) =>
                            <tr>
                                <td>{(index+1)}</td>
                                <td>{item.nom}</td>
                                <td>{item.price} €</td>
                                <td>{item.quantity}</td>
                                <td>{item.price*item.quantity} €</td>
                                <td className='action-col'>
                                    <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                    -
                                  </button>
                                  <button
                                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                  >
                                  +
                                  </button>
                                  <button onClick={() => removeItem(item.id)}>Remove</button>
                                </td>
                            </tr>

                          )
                    }
                    <tr className = 'table-mark'>
                      <td className='total' colSpan = '5'><h4>Total: </h4></td>
                      <td className='total' ><h3>{cartTotal} €</h3></td>
                    </tr>
                </tbody>
                </table>
                <div className='close-table'>
                    <button style = {{cursor:"pointer"}} onClick = {handleCheckout}>CHECK OUT</button>
                      
                    <Link to='/'><button className='closeBtn'>CLOSE</button></Link>
                </div>
        </TableWrapper>
      
      </div>
    )
}