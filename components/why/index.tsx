import React from "react";
import styles from "./styls.module.css";
import { HostSvg } from "@/svgs/host";
import Image from "next/image";
import { Layout } from "@/layout";

export const Why = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Why choose us?</h2>
          <HostSvg />
        </div>
        <div className={styles.body}>
          <div className={styles.single}>
            <Image src="/images/star.png" width={43.12} height={43.12} alt="Star" />
            <h2>Uniquely Crafted for You</h2>
            <p>From cakes to wigs and accessories—each piece is made with flair, quality, and love.</p>
          </div>
          <div className={styles.line} />
          <div className={styles.single}>
            <Image src="/images/gift-box.png" width={43.12} height={43.12} alt="Star" />
            <h2>Style You Can Trust</h2>
            <p>Reliable service, custom designs, and happy customers every time.</p>
          </div>
          <div className={styles.line} />
          <div className={styles.single}>
            <Image src="/images/premium-quality.png" width={43.12} height={43.12} alt="Star" />
            <h2>Made Just for You </h2>
            <p>Every order is tailored to your style, taste, and celebration—never one-size-fits-all.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
