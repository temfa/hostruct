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
  const [selected, setSelected] = useState("Cakes");
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    setData(selected === "Cakes" ? faqs?.cake : selected === "Wigs" ? faqs?.wig : faqs?.access);
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
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value="Cakes">Cake and Pastries</option>
            <option value="Wigs">Wigs & Braids</option>
            <option value="Access">Accessories</option>
          </select>
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
