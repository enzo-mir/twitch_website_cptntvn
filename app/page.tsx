"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { TwitchEmbed } from "react-twitch-embed";
import { FaDiscord, FaYoutube, FaInstagram, FaTwitch } from "react-icons/fa";
import { useState } from "react";
import Loading from "./Loading";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <main className={styles.main}>
      <Image className={styles.bgImage} src="/background_image.webp" alt="background thresh personna of league of legends" fill priority />
      <div>
        {!isLoaded ? <Loading /> : null}
        <TwitchEmbed className={styles.stream} onVideoReady={() => setIsLoaded(true)} channel="cptntvn" autoplay allowFullscreen />
      </div>

      <aside className={styles.aside}>
        <Image src="/pseodo.svg" alt="" width={300} height={300} />

        <ul>
          <li>
            <a href="#">
              <FaDiscord />
              Discord
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
              Youtube
            </a>
          </li>
          <li>
            <FaInstagram />
            <a href="">Instagram</a>
          </li>
          <li>
            <FaTwitch />
            <a href="">Twitch</a>
          </li>
        </ul>
      </aside>
    </main>
  );
}
