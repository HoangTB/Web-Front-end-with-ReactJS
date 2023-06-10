import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function RequiredAdmin() {
    const [hasToken] = useState(JSON.parse(localStorage.getItem("users")))
    return(
        (hasToken && Number(hasToken?.admin)  === 1) ? <Outlet/> : <Navigate to="/home" />
    )
}
export default RequiredAdmin;