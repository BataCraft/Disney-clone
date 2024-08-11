import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Homepage from "./Page/Homepage"

const MyRoutes = () => {
  return (
      
<>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        
      </Routes>
    </Router>
</>
)
}

export default MyRoutes