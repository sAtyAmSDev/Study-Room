import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [Responce, setResponce] = useState(null)

    return (
        <AuthContext.Provider value={{ Responce ,setResponce }}>{children}</AuthContext.Provider>
    )
}
