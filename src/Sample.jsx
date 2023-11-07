// import React, { useState } from "react";

// const { useState, useEffect } = require("react");

// function ChangeColor(){
//   const [color,set]=useState();
//   const [count,get]=useState(0);
//   return(
//     <div>
//         <h2>Its just a {color} car!!</h2>
//         <button type="button" onClick={()=>set("blue")}>blue</button>
//         <h2>Its just a {count} car!!</h2>
//         <button type="button" onClick={()=>get(count+1)}>click</button>
//     </div>
//   )
// }
// export default ChangeColor;
// -------------------------------------------------------------------------------------

// import React,{useState} from "react";
// function Example(){
//   const [type,set]=useState({
//     name:"swift",
//     color:"red",
//     year:2002
//   });
//   const updateColor = () => {
//     set(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }
//   return(
//     <div>
//         <h1>My {type.name} car</h1>
//         <p>It is a {type.color} car from {type.year}.</p>
//         <button type="button" onClick={updateColor}>click</button>
//     </div>
//   )
// }
// export default Example;
// ----------------------------------------------------------
// use effect programs---------------------------------------

// import React,{ useState,useEffect } from "react";
// function Timer(){
//   const[add,setadd]=useState(0);
//   useEffect(()=>{
//     setTimeout(() => {
//       setadd((add)=>add+1)
//     }, 100);
//   })
//   return( <h2>Time is now {add} </h2> )
// }
// export default Timer;
// -----------------------------------------------------------

// import React,{useState,useEffect} from "react";
// function Timer() {
  // const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count+1);
//     }, 1000);

//   return () => clearTimeout(Timer)
//   }, []);

//   return <h1>I have done {count} times!</h1>;
// }
// export default Timer;
// ------------------------------------------------------------
// import { useReducer } from "react";
// function Reducer(state,action){
//   switch(action.type){
//     case "increment":
//       return{count:state.count+1};
//     case "decrement":
//       return{count:state.count-1};
//     case "reset":
//       return{count:0};
//     default:
//       throw Error("invalid action");
//   }
// }
// function Blue(){
//   const [state,dispatch]=useReducer(Reducer,{count:0});
//   return(
//     <div className="box">
//     <h1 className="a2"> {state.count} </h1>
//     <button className="a1" onClick={()=>dispatch({type:"increment"})}> +</button>
//     <button className="a1" onClick={()=>dispatch({type:"decrement"})}> -</button>
//     <button className="a1" onClick={()=>dispatch({type:"reset"})}>reset</button>
//     </div>
//   )
// }
// export default Blue;
// =========================================================================

import { useReducer } from "react";

const initialState=[]

function Reducer(state,action){
    switch(action.type){
      case "add": return[
        ...state,
        {
            id:state.length +1,
            name: action.payload
        }
    ];
    case "delete_task": return[
      state.filter(d=> d.id !== action.payload)
    ];

    case "reset_task": return res(action.payload)
    default: return state;
    }
}
function res(initialstate){
return[initialState];
}

function Todos() {
  const [todos, dispatch] = useReducer(Reducer,initialState,res);
return (
  <div >
      <h1>TodoList {todos.length}</h1>
      Add New Task:
      <input style={{border:"solid 3px"}} type="text" onBlur={(e)=>dispatch({type:"add", payload: e.target.value})} />

      <button onClick={()=>dispatch({type:"reset_task" ,payload:initialState})} >Reset</button>
      
      {todos.map(todo => <li key={todo.id}>{todo.name}
          <span>
              <button onClick={()=>dispatch({type:"delete_task", payload:todo.id })}>
                  Delete
              </button>
          </span>
          </li>)}
  </div>
)
}
export default Todos;