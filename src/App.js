import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tiks from "./components/Tiks";
import Intro from "./components/Intro";
import Merch from "./components/Merch";
import Form from "./components/Form";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
function App() {
  const [isLogin,setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<PrivateRoute isLogin={isLogin}><Tiks/></PrivateRoute>} />
      <Route path="/artists" element={<Intro/>}/>
      <Route path="/merch" element={<Merch/>}/>
      <Route path="/form" element={<Form isLogin={isLogin} setLoggedIn={setLoggedIn}/>}/>
      <Route path="*" element={<div><h1>enter correct url</h1></div>} />
    </Routes>
  );
}

export default App;


