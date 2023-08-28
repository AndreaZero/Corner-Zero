import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/fixed/Navbar";
import theme from "./theme";
import axios from "axios";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import PostView from "./components/PostView";
import Corners from "./pages/Corners";
import Repos from "./pages/Repos";
import Contacts from "./pages/Contacts";

axios.defaults.baseURL = "https://cornerzeroserver-4b9300c63b20.herokuapp.com/";
axios.defaults.withCredentials = true;

function App () {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/admin/dashboard" element={<Dashboard/>} />
        <Route exact path='/admin/login' element={<LoginPage />} />
        <Route exact path='/corners' element={<Corners />} />
        <Route exact path='/repos' element={<Repos/>} />
        <Route exact path='/contacts' element={<Contacts/>} />
        <Route exact path="/posts/:id" element={<PostView/>} />
        {/* <Route exact path='/admin/register' element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App;