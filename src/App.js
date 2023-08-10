import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import React,{createContext,useState} from 'react'
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import ImageSlider from './components/ImageSlider';
import LogoSection from './components/LogoSection';
import ImageCarousel from './components/ImageCarousel';
import NewsSection from './components/NewsSection';
import Router from './router';
import FootLinks from './components/FootLinks';
import EventSection from './components/EventSection';
import { DefaultTheme } from './theme/DefaultTheme';

export  const globalData = createContext();
export  const globalInputData = createContext();

function App() {
  // const theme = createTheme();
  const [dataValue, setDataValue] = useState("test data")
  
  return (
    <div className="App">

        <ThemeProvider theme={DefaultTheme}>

          <globalData.Provider value={{dataValue, setDataValue}}>
                   <Header/>

                <Router/>
           
                 <FootLinks/>
          </globalData.Provider>

   

         

      
    {/* <ImageSlider/> */}


  
    
        {/* <Section/> */}
    </ThemeProvider>

       
    </div>
  );
}

export default App;