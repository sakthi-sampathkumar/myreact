import React from "react";
import { Link } from "react-router-dom";
export default function Page(){
    return(
        <div>
            <h1>Pages:</h1>
            <ul>
            <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
            </ul>
        </div>
    );
}