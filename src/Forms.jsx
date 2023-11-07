import React,{useState} from "react";
import './Demo.css'

    const Form = () => {
      const [inputs, setInputs] = useState({
        Name: "",
        email: "",
        pass: "",
      });
    
      const [errors, setErrors] = useState({
        Name: "",
        email: "",
        pass: "",
      });

      const [validatedData, setValidatedData] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prev) => {
          return { ...prev, [name]: value };
        });
    
        setErrors((prev) => {
          return { ...prev, [name]: "" };
        });
      };

      const validate = () => {
        const { Name, email, pass } = inputs;
    
        const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const naming=/^[A-Z]/;
    
        const newErrors = {};

        if (!Name.match(naming)) {
          newErrors.Name = "Please enter a name";
        }
    
        if (email === "" || !mail.test(email)) {
          newErrors.email = "Please Enter Valid Email Id";
        }
    
        if (!pass.match(passvalidate)) {
          newErrors.pass = "Please enter a valid password";
        }
    
       
    
        if (Object.values(newErrors).every((error) => error === "")) {
          // If there are no errors, store the validated data and clear input fields
          setValidatedData(inputs);
          setInputs({
            Name: "",
            email: "",
            pass: "",
           
          });
        }
    
        setErrors(newErrors);
      };

      return (
        <div className="container">
          <h1>Registration Form</h1>
          <form action="" className="form" onSubmit={(e) => { e.preventDefault(); validate(); }}>
            
          <label className="Name">Name:</label>
            <input type="text" value={inputs.Name} placeholder="Name" name="Name" onChange={handleChange} />
            <div className="error">{errors.Name}</div>
            <br />

            <label className="email">Email:</label>
            <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
            <div className="error">{errors.email}</div>
            <br />
    
            <label className="pass">Password:</label>
            <input type="text" value={inputs.pass} placeholder="Password" name="pass" onChange={handleChange} />
            <div className="error">{errors.pass}</div>
            <br />
    
            <button type="submit">Submit</button>
          </form>
    
          {validatedData && (
            <div>
              <h2>Validated Data</h2>
              <p>Name: {validatedData.Name}</p>
              <p>Mail ID: {validatedData.email}</p>
              <p>Password: {validatedData.pass}</p>
              
            </div>
          )}
        </div>
      );
    }
export default Form;