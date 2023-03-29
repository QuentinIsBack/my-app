import React, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

// Import Authentificated
import { UserContext } from "../contexts/UserContext";

export default function Home() {
    const { UserData } = useContext(UserContext)

    if (!UserData.agency) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}