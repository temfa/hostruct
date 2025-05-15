"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { PlusSvg } from "@/svgs/plus";
import { faqs } from "@/utils/data";

type Props = {
  question: string;
  answer: string;
};

export const FaqBody = () => {
  const [active, setActive] = useState(-22);
  const header = ["Cakes & Pastries", "Wigs & Braids", "Accessories"];
  const [selected, setSelected] = useState("Cakes & Pastries");
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    setData(selected === "Cakes & Pastries" ? faqs?.cake : selected === "Wigs & Braids" ? faqs?.wig : faqs?.access);
  }, [selected]);
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2>Frequently Ask Questions (FAQ)</h2>
            <p>
              Some of our most frequently asked questions — thoughtfully answered to give you the clarity, confidence, and peace of mind you need as you explore our products and
              services
            </p>
          </div>
          <div className={styles.middle}>
            {header?.map((item, index) => {
              return (
                <p key={index} className={item === selected ? styles.active : ""} onClick={() => setSelected(item)}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className={styles.body}>
            {data?.map((item, index) => {
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
          </div>
        </div>
      </Layout>
    </div>
  );
};
