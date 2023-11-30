import React from "react";
import { NavBar } from "../components/navBar/navbar";
import { Home } from "../components/home/home";
import { TopCrypto } from "../components/topCrypto/topCrypto";
import { Earn } from "../components/earn/earn";
import { Footer } from "../components/footer/footer";


export const PAGE = () => {
    return (
        <>
        <NavBar />
        <Home />
        <TopCrypto />
        <Earn />
        <Footer />
        </>
    )
};