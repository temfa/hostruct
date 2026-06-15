import { Layout } from "@/layout";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export const ProductBanner = ({ src }: { src: string }) => {
  return (
    <Layout>
      <Image src={src} width={1241} height={698} alt="banner" className={styles.image} />
    </Layout>
  );
};
