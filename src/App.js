import React from "react";

import './styles.css';
import Nav from "./components/nav/nav";
import Landing from "./components/landing/landing";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
export default function App(){
    return(
        <>
        <Nav/>
        <Landing/>
        <Skills/>
        <Education/>
        
        </>
        
    );
}