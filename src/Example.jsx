import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
export default function Pages(){
    return(
        <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>

        </Route>
       </Routes>
        </BrowserRouter>
    )
}