"use client"
import Navbar from "./components/navbar";
import styles from "./page.module.css";
import Header from "./components/header"
import Events from "./components/events"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Events />
    </div>
  );
}
