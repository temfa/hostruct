import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
