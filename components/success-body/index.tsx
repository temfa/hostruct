import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";

export const SuccessBody = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}></div>
      </Layout>
    </div>
  );
};
