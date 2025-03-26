"use client"
import styles from "./page.module.css";
import Header from "./components/header";
import Events from "./components/events"
export default function Home() {
  return (
    <div>
      <Header />
      <Events />
    </div>
  );
}
