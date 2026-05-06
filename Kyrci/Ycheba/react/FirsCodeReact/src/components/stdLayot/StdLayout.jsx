import { Outlet } from "react-router";
import Header from "../header/header";

function StdLayout() {


    return (

        <>
            <Header />

            <Outlet />


        </>

    )
}

export default StdLayout;