import React from "react";
import {useAuthService} from "./AuthService";
import Client from "../../Client";

const authState = {authorization: {}, user: {}}
const authStateContext = React.createContext(authState);
const authDispatchContext = React.createContext(undefined);

export const AuthProvider = ({children,props}) => {

    const [auth, dispatch] = React.useReducer(
        (state, newValue) => ({...state, ...newValue}),
        authState
    );


    return (
        <authStateContext.Provider value={auth}{...props}>
            <authDispatchContext.Provider value={dispatch} >
                {children}
            </authDispatchContext.Provider>
        </authStateContext.Provider>
    )
}


export const useAuthContext = () => [
    React.useContext(authStateContext),
    React.useContext(authDispatchContext)
]

