// import Topbar from "./components/topbar/Topbar";
//  import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Setting from "./pages/setting/Setting";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function Main() {
//   const currentUser = true;
//   return (
//     <Router>
//     <Topbar />
//     <Routes>
//     <Route exact path='/' element={<Home />} />
//     <Route path='/posts' element={<Home />} />
//     <Route path='/register' element={ currentUser ? <Home/> : <Register />} />
//     <Route path='/login' element={currentUser ? <Home/> : <Login />} />
//     <Route path='/post/id' element = {<Single/>} />
//     <Route path='/write' element={currentUser ? <Write/> :<Login />} />
//     <Route path='/setting' element={currentUser ? <Setting/> :<Login />} />
//     </Routes>
// </Router>
//     // <Router>
//     //   <Topbar />
//     //   <Routes>
//     //   <Route exact path='/' element={<Home />} />
        
//     //     <Route path="/posts">
//     //       <Home />
//     //     </Route>
//     //     <Route path="/register">
//     //       {currentUser ? <Home /> : <Register />}
//     //     </Route>
//     //     <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
//     //     <Route path="/post/:id">
//     //       <Single />
//     //     </Route>
//     //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//     //     <Route path="/settings">
//     //       {currentUser ? <Settings /> : <Login />}
//     //     </Route>
//     //   </Routes>
//     // </Router>
//   );
// }

// export default Main;

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
//     <Topbar />
//     <Routes>
//     <Route exact path='/' element={<Home />} />
//     <Route path='/posts' element={<Home />} />
//     <Route path='/register' element={ currentUser ? <Home/> : <Register />} />
//     <Route path='/login' element={currentUser ? <Home/> : <Login />} />
//     <Route path='/post/id' element = {<Single/>} />
//     <Route path='/write' element={currentUser ? <Write/> :<Login />} />
//     <Route path='/setting' element={currentUser ? <Setting/> :<Login />} />
//     </Routes>
// </Router>
  );
}

export default App;