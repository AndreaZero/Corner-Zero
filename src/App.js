import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/fixed/Navbar";
import theme from "./theme";
import axios from "axios";
import loadingImage from "./styles/img/logo.png"; // Sostituisci con il tuo GIF o immagine

import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/fixed/Footer";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import PostView from "./components/PostView";
import Corners from "./pages/Corners";
import Repos from "./pages/Repos";
import GitRepos from "./pages/GitRepos";
import Contacts from "./pages/Contacts";
import Learn from "./pages/Learn";
import LearnDetail from "./components/LearnDetail";
import About from "./pages/about/About";

axios.defaults.baseURL = "https://cornerzeroserver-4b9300c63b20.herokuapp.com";
axios.defaults.withCredentials = true;

function App () {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simula un caricamento di 3 secondi
  }, []);

  if (isLoading) {
    return <img src={loadingImage} alt="Caricamento..." />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <BrowserRouter>
      <Navbar/>
      <Box paddingTop='50px'>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/admin/dashboard" element={<Dashboard/>} />
        <Route exact path='/admin/login' element={<LoginPage />} />
        <Route exact path='/corners' element={<Corners />} />
        <Route exact path='/reposs' element={<Repos/>} />
        <Route exact path='/repos' element={<GitRepos/>} />
        <Route exact path='/learn' element={<Learn/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/learn/:title' element={<LearnDetail/>} />
        <Route exact path='/contacts' element={<Contacts/>} />
        <Route exact path="/corners/:id" element={<PostView />} />
        {/* <Route exact path='/admin/register' element={<RegisterPage />} /> */}
      </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  )
}

export default App;