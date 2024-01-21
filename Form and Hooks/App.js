import { useState } from 'react';

function App() {
  const [input, setInput] = useState({});

const handleinput=(e)=>{
  let name = e.target.name;
  let value = e.target.value;
  setInput(items=>({...items,[name]:value}))
}
const handleSubmit =()=>{
  console.log({input})
}
  
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "600px" }}>
        <div>
        <h1> Application Form</h1>
        Enter your name : 
        <input type="text" name="Name" onChange={handleinput}/>
          <br/><br/>
        Enter your Cityname : 
        <input type="text" name="City" onChange={handleinput}/>
        <br/><br/>
        Enter mobile number : 
        <input type="text" name="Mobile" onChange={handleinput}/>
        <br/><br/>
        Enter your Email : 
        <input type="text" name="Email" onChange={handleinput}/>
        <br/><br/>
        <button onClick={handleSubmit}>submit</button>
        </div>
      </div>


    </>
  );
}

export default App;
