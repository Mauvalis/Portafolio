import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Semana1 from "./pages/semana1";
import Semana2 from "./pages/semana2";
import Semana3 from "./pages/semana3";
import Semana4 from "./pages/semana4";
import Semana5 from "./pages/semana5";
import Semana6 from "./pages/semana6";
import Semana7 from "./pages/semana7";
import Semana8 from "./pages/semana8";
import Semana9 from "./pages/semana9";
import Semana10 from "./pages/semana10";
import Semana11 from "./pages/semana11";
import Semana12 from "./pages/semana12";
import Semana13 from "./pages/semana13";
import Semana14 from "./pages/semana14";
import Semana15 from "./pages/semana15";
import Semana16 from "./pages/semana16";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/semana1'} element={<Semana1/>}/>
                  <Route exact path={'/semana2'} element={<Semana2/>}/>
                  <Route exact path={'/semana3'} element={<Semana3/>}/>
                  <Route exact path={'/semana4'} element={<Semana4/>}/>
                  <Route exact path={'/semana5'} element={<Semana5/>}/>
                  <Route exact path={'/semana6'} element={<Semana6/>}/>
                  <Route exact path={'/semana7'} element={<Semana7/>}/>
                  <Route exact path={'/semana8'} element={<Semana8/>}/>
                  <Route exact path={'/semana9'} element={<Semana9/>}/>
                  <Route exact path={'/semana10'} element={<Semana10/>}/>
                  <Route exact path={'/semana11'} element={<Semana11/>}/>
                  <Route exact path={'/semana12'} element={<Semana12/>}/>
                  <Route exact path={'/semana13'} element={<Semana13/>}/>
                  <Route exact path={'/semana14'} element={<Semana14/>}/>
                  <Route exact path={'/semana15'} element={<Semana15/>}/>
                  <Route exact path={'/semana16'} element={<Semana16/>}/>

               </Routes>
               
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>portafolio creado &hearts; by <a href={'https://paytonpierce.dev'}>Mauricio Valenzuela</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

