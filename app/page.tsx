"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {TwitchEmbed} from "react-twitch-embed"

export default function Home() {
  return (
    <main className={styles.main}>
      <TwitchEmbed channel="cptntvn"/>
    </main>
  );
}
