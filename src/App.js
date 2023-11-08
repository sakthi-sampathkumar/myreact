import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";
function App() {
  return (
    <div>
    <BrowserRouter>
  <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;