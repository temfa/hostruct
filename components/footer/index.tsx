import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { navbarLinks } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { TikTokSvg } from "@/svgs/tiktok";
import { FacebookSvg } from "@/svgs/facebook";
import { InstagramSvg } from "@/svgs/instagram";
import { TwitterSvg } from "@/svgs/twitter";

export const Footer = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Image src="/images/hostruct.png" width={97} height={54} alt="Logo" />
            <p>From cakes to wigs and accessories—each piece is made with flair, quality, and love.</p>
          </div>
          <div className={styles.right}>
            <div>
              {navbarLinks?.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    {" "}
                    {item.text}
                  </Link>
                );
              })}
              <Link href="/contact">Contact us</Link>
            </div>
            <p> Copyright © 2025 HostAssociate | All Rights Reserved</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft} />
          <div className={styles.black}>
            <div className={styles.white}>
              <div className={styles.socials}>
                <Link href="https://www.tiktok.com/@hostruct?_t=ZN-8ueZ3YerMj0&_r=1" target="_blank">
                  <TikTokSvg />
                </Link>
                <Link href="https://www.facebook.com/share/16EX3tByLn/?mibextid=wwXIfr" target="_blank">
                  <FacebookSvg />
                </Link>
                <Link href="https://www.instagram.com/hostruct_associate?igsh=MWFta2h1OWV2N3Zycg%3D%3D&utm_source=qr" target="_blank">
                  <InstagramSvg />
                </Link>
                <Link href="#">
                  <TwitterSvg />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
