import React from "react";
import { Link } from "react-router-dom";
export default function Blogs(){
    return(
        <div>
            <h1>details Only</h1>
            <ul>
                <li>
                    <Link to="/home">home page</Link>
                </li>
            </ul>
        </div>
    );
}