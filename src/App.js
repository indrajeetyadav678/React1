import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
  
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

//========================= JSX = javascript XML ================================

// const namx = <h1>your life is my need!</h1>


// const name = "indrajeet";
// const age = 34;
// const App = () => {
//   return (
//     <h1>I am {name} yadav my age is {age*2}. {namx}</h1>
//   );
// }
// export default App;

// ======================== 2  =====================

// const navbar = <ul>
//   <li>Bhopal</li>
//   <li>Indore</li>
//   <li>Sehore</li>
//   <li> Dehli</li>
//   <li>Panjab</li>
// </ul>;

// const App = () => {
//   return (
//     <h1>{navbar}</h1>
//   );
// }
// export default App;

// ============= 3 ===================

// const App = () => {
//   return (
//     // <div>  ( covering div)
//     // <h1>india is the country of river</h1>
//     // <h4>your name is sohani saha</h4>
//     // </div> //
//     //or figment tag
//     <>
//      <h1>india is the country of river</h1>
//     // <h4>your name is sohani saha</h4>
//     </>
//   );
// }
// export default App;

// =========================== 4 ===============================
// import "./App.css";

// const App =()=>{
//   return(
//     <>
//     <h1>My appication Form</h1>
//     Enter your name <input type="text" className="name1" />
//     <br />
//     Enter your fee: <input type="text" className="age"/>
//     <hr size="4" color="yellow" />
    
//     </>
//   );
// }
// export default App;

//================================ 9/01/2024 ===================

// const App =()=>{
//   return(
//     <>
//     <h1>My appication Form</h1>
    
//     </>
//   );
// }
// export default App;
