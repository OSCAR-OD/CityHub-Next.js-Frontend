"use client"
import Link from "next/link";
import  {useEffect} from 'react';
//import mNav from './components/JsContent/MNav';
//import lazyLoading from './components/JsContent/LazyLoading';
//import './components/libCss/style.css'
//import Image from 'next/image'
//import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Banner from "./components/Banner/Banner";
import About from './components/About/About'
import Featured from './components/Featured/Featured'
import Work from './components/Work/Work'
//import Contact from './components/Contact/Contact'
import Catagory from './components/Catagory/Catagory'
import Newsletter from './components/Newsletter/Newsletter'
export default function Home() {
 
  useEffect(() => {
    // mNav();
   // lazyLoading();
  }, []);

  return (
     <main >
<Hero />
<Catagory />
<About />
<Newsletter />
       </main>
  )
}
