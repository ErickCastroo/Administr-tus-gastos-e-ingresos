import {createContext, useReducer,useContext, useEffect } from 'react'
import AppReducer from './AppReducer'

const estadoInicial= {
    transaccion: []
}

export const Contexto= createContext();

export const useGlobalState = ( ) => {
    const contexto = useContext(Contexto)
    return contexto
}



export const GlobalProvaider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer,estadoInicial, 
        () => {
            const localData = localStorage.getItem('transaccion')
            return localData ? JSON.parse(localData): estadoInicial
        })

        
        useEffect(() => {
            localStorage.setItem('transaccion', JSON.stringify(state))
        }, [state])
        

    const agregarTransaccion = (transaccion) => {
        dispatch({
            type:'AGREGAR_TRANSACCION',
            payload: transaccion
        })
    } 

    const borrarTransaccion = (id) => {
        dispatch({
            type:'BORRAR_TRANSACCION',
            payload: id
        })
    } 

    return(
        <Contexto.Provider
        value={{
            transaccion: state.transaccion,
            agregarTransaccion,
            borrarTransaccion
        }}
        > 
            {children}
        </Contexto.Provider>
    )
    
}