// import Nav from 'react-bootstrap/Nav';
// import Card from 'react-bootstrap/Card';
// import gir from './portfolio/girl.jpg';
// import thumb from './portfolio/thumb-01.jpg';
// import { BsFillPersonFill} from "react-icons/bs";
// import {BsSearch} from "react-icons/bs";
// import { BsHouseDoorFill } from "react-icons/bs";
// // import { motion } from 'framer-motion';

// function Demo(){
//     const aaa={
//         color:"teal",
//     }
//     return(
//         <div className='container-fluid-well'>
    
//       <Nav fill variant="tabs" defaultActiveKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home" style={aaa}> <BsHouseDoorFill className='logo'/>Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1" style={aaa}><BsFillPersonFill className='logo' />Login</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2" style={aaa}><BsSearch className='logo'/> Seacrh</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-3" style={aaa}>About us</Nav.Link>
//         </Nav.Item>
//       </Nav>

//       <div className='Card0'>
//       <div className='Card1'>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={gir}/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </div>
//       <div className='Card2'>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={thumb}/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//       </div>
//       </div>
     
//   </div>
//     )
// }
// // export const MyComponent = () => (
// //   <motion.div
// //     animate={{
// //       scale: [1, 2, 2, 1, 1],
// //       rotate: [0, 0, 270, 270, 0],
// //       borderRadius: ["20%", "20%", "50%", "50%", "20%"],
// //     }}
// //   />
// // )
// export default Demo;
// ------------------------------------------------
// ------------------------------------------------
// class example program1:

// import React from 'react';

// class Car extends React.Component{
//   render(){
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// export default Car;
// ----------------------------------
// class component example program2:
// import React from 'react';

// class Car extends React.Component{
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render(){
//     return <h2>Hi, I am a {this.state.color} Car!</h2>;
//   }
// }

// export default Car;
// // -------------------------------------

// import React from "react";

// class Sample extends React.Component{
//     render(){
//         return( 
//             <h1>my world</h1>
//         );
//     }
// }

// export default Sample;
// sample1-----------------------------------------

// sample 2 using props----------------------------
// import React from "react";

// class Car extends React.Component{
//     render(){
//         return <h3>i am a {this.props.color} car</h3>;
//     }
// }
// export default Car;
// -------------------------------------------------

// sample 3 using component in component-----------

// import React from "react";

// class Word extends React.Component{
//     render(){
//         return <h2>Hello!</h2>;
//     }
// }
// class World extends React.Component{
//     render(){
//         return <div>
//             <h4>My world!!!</h4>
//             <Word />
//         </div>
//     }
// }
// export default World;
// -----------------------------------------------------
// sample 4 using components in file--------------------

// import React from 'react';

// class Ant extends React.Component{
//     render(){
//         return( 
//             <h1>my world</h1>
//         );
//     }
// }
// export default Ant;
// ----------------------------------------------------
// sample 5 using state component----------------------

// import React from "react";
// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red ",
//         year: 1964
//       };
//     }
//     changeColor = () => {
//       this.setState({color: "blue "});
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <button
//             type="button"
//             onClick={this.changeColor}
//           >Change color</button>
//         </div>
//       );
//     }
//   }
//   export default Car;
// -----------------------------------------------------

import { useReducer } from "react"

const initialState =[]

const TODOS_ACTIONS = {
    ADD_TASK:"add_task",
    DELETE_TASK:"delete_task",
    RESET_TODOS: "reset_todos"
}

       
function reducer(state,action) {
    switch (action.type) {
        case TODOS_ACTIONS.ADD_TASK : return[
            ...state,
            {
                id:state.length +1,
                name: action.payload
            }
        ];
        case TODOS_ACTIONS.DELETE_TASK: 
        return state.filter(d=> d.id !== action.payload)
        
        case TODOS_ACTIONS.RESET_TODOS: return init(action.payload)
            
            
    
        default: return state;
            
    }
}

function init(initialstate){

    // const result = [...initialstate,{id: "1", name: "reading"}]
    return initialState;
}

    
export default function Todos() {
    const [todos, dispatch] = useReducer(reducer,initialState,init);
  return (
    <div >
        <h1>TodoList {todos.length}</h1>
        Add New Task:
        <input style={{border:"solid 3px"}} type="text" onBlur={(e)=>dispatch({type:TODOS_ACTIONS.ADD_TASK, payload: e.target.value})}  />

        <button className="btn btn-outline-success" onClick={()=>dispatch({type: TODOS_ACTIONS.RESET_TODOS,payload:initialState})} >Reset</button>
        
        {todos.map(todo => <li key={todo.id}>{todo.name}
            <span>
                <button className="btn btn-outline-danger" onClick={()=>dispatch({type:TODOS_ACTIONS.DELETE_TASK, payload:todo.id })}>
                    Delete
                </button>
            </span>
            </li>)}
    </div>
  )
}
