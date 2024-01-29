"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { TwitchEmbed, TwitchPlayer } from "react-twitch-embed";
import { FaDiscord, FaYoutube, FaInstagram, FaTwitch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loading from "./Loading";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  function loaded() {
    setIsLoaded(true);
  }
  return (
    <main className={styles.main}>
      {!isLoaded ? <Loading className={styles.loading} /> : null}
      <TwitchPlayer className={styles.stream} onLoadCapture={loaded} channel="cptntvn" autoplay />
      <aside className={styles.aside}>
        <Image src="/pseodo.svg" alt="cptntvn illustration logo" width={300} height={90} />
        <ul>
          <li>
            <a href="https://discord.gg/3GFMDeAk" target="_blank">
              <FaDiscord />
              Discord
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@CPTNTVN" target="_blank">
              <FaYoutube />
              Youtube
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cptn_tvn?igsh=MWUyczRxMjI1d2NpMg==" target="_blank">
              <FaInstagram />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/cptntvn" target="_blank">
              <FaTwitch />
              Twitch
            </a>
          </li>
        </ul>
      </aside>
    </main>
  );
}
