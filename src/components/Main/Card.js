import styled from 'styled-components'
const CardContent = styled.div`
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #90cf90;
    width: 90%;
    height: 700px;
    border-radius: 15px 15px 0px 0;
    transition: all .5s ease;

    & .image-content{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 47%;
        background-color: #90cf90;
        border-radius: 15px 15px 0px 15px;
        & .testimony-image{
            
        }
    }
    & h1{
        color: #52645b;
        font-size: 35px;
    }
    & button{
        border: none;
        font-size:20px;
        font-weight:600;
        background-color:#90cf90;
        color:#fff;
        padding: 10px 40px;
        border-radius:10px;
        margin: 25px;
        cursor:pointer;
        &:hover{
            border: 1px solid #90cf90;
            background-color:inherit;
            color:#222;
        }
    }
    &:hover{
        border: 5px double #90cf90;

    }
`


export default function Card({card}){
    return(
            <CardContent >
                <div className ='image-content'>
                    <div className='testimony-image'>
                        <img src = {card.img} />
                    </div>
                </div>
                <h1>{card.name}</h1>
                <div className='text-content'>
                    <h3>{card.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa in consequatur praesentium, cum, alias minima accusantium fuga ratione vero  laborum iusto. Vel?</p>
                </div>
                <button>Contact</button>
            </CardContent>
    )

}