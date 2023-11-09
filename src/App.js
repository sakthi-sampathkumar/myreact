import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div>
    <BrowserRouter>
  <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="home" element={<Home />} />
          </Route>
          <Route path="contact/:id" element={<Contact />} > </Route> 
        </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;