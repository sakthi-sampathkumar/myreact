import React from "react";
import { useParams } from "react-router-dom";
export default function Contact(){
    const {id}=useParams()
    return(
        <div>
            <h1>Contact details</h1>
            <h4>ID: {id}</h4>
        </div>
    );
}