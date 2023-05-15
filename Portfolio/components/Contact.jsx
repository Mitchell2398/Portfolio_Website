import React from "react";

export default function Contact () {

    const [formData, setFormData] = React.useState({})
   
        
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    console.log(formData)
  };

    const submit = (e) => {
        e.preventDefault()
        console.log(formData)
        console.log("Submitted")
  }
    
    return (
<div id="contact">
    <h2>Contact</h2>
    <div className="contactContainer" id="contact">
            

    <form>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" onChange={handleChange} />
      </label>
      <button type="submit" onClick={submit}>Submit</button>
    </form>

        </div>
    </div>
    )
}