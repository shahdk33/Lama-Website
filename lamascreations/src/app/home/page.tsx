"use client"
import Navbar from "../components/navbar";
import styles from "./page.module.css";
import Header from "../components/header"
import Events from "../components/events"
import Footer from "../components/footer"
export default function Home() {
  return (
    <div>
      <Header />
      <Events />
    </div>
  );
}
