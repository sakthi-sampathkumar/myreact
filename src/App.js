import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import Public from "./Public";
import Private from "./Private";
import Page from "./Page";

function App() {
  return (
    <div>
     <BrowserRouter>
   <Routes>
           <Route path="/" element={<Layout />}>
           <Route path="blogs" element={<Blogs />} />
           <Route path="home" element={<Home />} />
           <Route path="contact/:id" element={<Contact />} />         
           </Route>
           <Route path="page" element={<Page/>} />
           <Route path="public" element={<Public />} />
           <Route path="private" element={<Private />} />
         </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;