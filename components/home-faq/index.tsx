"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { faqs } from "@/utils/data";
import { PlusSvg } from "@/svgs/plus";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

export const HomeFaq = () => {
  const [active, setActive] = useState(-20);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Frequently Ask Questions (FAQ)</h2>
          <p>
            Some of our most frequently asked questions — thoughtfully answered to give you the clarity, confidence, and peace of mind you need as you explore our products and
            services
          </p>
        </div>
        <div className={styles.right}>
          {faqs?.map((item, index) => {
            return (
              <div
                key={index}
                className={active === index ? `${styles.single} ${styles.active}` : styles.single}
                onClick={() => {
                  if (active === index) setActive(-20);
                  else setActive(index);
                }}>
                <div className={styles.content}>
                  <h3>{item.question}</h3>
                  {active === index && <p>{item.answer}</p>}
                </div>
                <div className={styles.plus}>
                  <PlusSvg color={active === index ? "#D79C0D" : "white"} />
                </div>
              </div>
            );
          })}
          <Link href="/faqs">
            View All FAQ <SideArrowSmallSvg color="#B8860B" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
