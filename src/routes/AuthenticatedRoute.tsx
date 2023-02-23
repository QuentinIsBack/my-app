import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

// Import Authentificated
import { UserContext } from "../contexts/UserContext";

export default function Home() {

    const { currentUser } = useContext(UserContext)

    if (!currentUser) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}