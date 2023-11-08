import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";

function App() {
  return (
    <div>
    <BrowserRouter>
  <Routes>
          <Route path="/" element={<Layout />}>
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact/:id" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route> 
        </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;