"use client"
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {

  const [login, setLogin] = useState(false)


  if(login == false){
    return (
    <>
    <Navbar/>
    <LandingPage/>
    </>
  );
  }else{
    return (
    <>
    </>
  );
  }
  
}
