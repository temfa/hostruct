import { Layout } from "@/layout";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export const ProductBanner = ({ src, mobile }: { src: string; mobile: string }) => {
  return (
    <Layout>
      <Image src={src} width={1241} height={398} alt="banner" className={styles.image} />
      <Image src={mobile} width={391} height={557} alt="banner" className={styles.mobile} />
    </Layout>
  );
};
