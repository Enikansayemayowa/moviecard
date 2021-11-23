import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Details from "./Moviecomp/Details";
import Homepage from "./Moviecomp/Homepage";

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/details/:id" element={<Details />} />
     </Routes>
   </Router>
  );
}

export default App;
