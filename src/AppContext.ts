
import { createContext, useContext } from "react";
import type {  AppStateContextValue, AppDispatchContextValue } from "./AppReducer";

export const AppStateContext = createContext<AppStateContextValue>(null)
export const AppDispatchContext = createContext<AppDispatchContextValue>(null)

export function useAppStateContext() {
    const value = useContext(AppStateContext)
    if (!value)
        throw new Error("Need to be used inside of AppStateContext.Provider")
    
    return value
        
}

export function useAppDispatchContext() {
    const value = useContext(AppDispatchContext)
    if (!value)
        throw new Error("Need to be used inside of AppDispatchContext.Provider")
    
    return value
        
}