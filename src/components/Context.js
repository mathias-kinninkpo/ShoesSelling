import {createContext, useState} from 'react'

export const ConnexionContext = createContext()
export const CheckoutContext = createContext()

export const ConnexionProvider = ({children}) => {

    const [connected , setConnected] = useState(localStorage.getItem("con") == 'true')

    function handleConnexion(){

        setConnected(!connected)
    }
    return (
        <ConnexionContext.Provider value = {{handleConnexion, connected}}>
            {children}
        </ConnexionContext.Provider>
    )

}
export const CheckoutProvider = ({children}) => {

    const [isConnected , setIsConnected] = useState(localStorage.getItem("check") == 'true')

    function checkoutHandler(val){

        setIsConnected(val)
    }
    return (
        <CheckoutContext.Provider value = {{checkoutHandler, isConnected}}>
            {children}
        </CheckoutContext.Provider>
    )

}
