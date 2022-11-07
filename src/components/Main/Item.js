import {dataBlog} from './image/dataBlog'
import { useParams } from 'react-router'
import styled from 'styled-components'

const TextDesign = styled.h2`
    color:#444;
    background-color: #90cf9c;
    font-weight:800;


`
const HDesign = styled.h4`
    color:#888;
    background-color: #90cf9c;

`

export default function Item(){

   const  {idItem} = useParams()
   const item = dataBlog[idItem-1]

   return (

       <div className='item'>
           <div className='card'>
                <img src = {item.src} className='image'/>
                <div>
                    <TextDesign>{item.nom}</TextDesign>
                    <HDesign>{item.price} €</HDesign>
                    <TextDesign>Description</TextDesign>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa in consequatur praesentium, cum, alias minima accusantium fuga ratione vero consequuntur, veritatis a ad molestiae hic facilis similique laborum iusto. Vel?</p>
                </div>
           </div>
       </div>
    )
}