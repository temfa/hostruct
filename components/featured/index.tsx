"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { ProductProps, SingleProduct } from "../single-product";
import { productData } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

export const FeaturedProducts = () => {
  const header = ["Cakes & Pastries", "Wigs & Braids", "Accessories"];
  const [active, setActive] = useState("Cakes & Pastries");
  const [data, setData] = useState<ProductProps[]>([]);
  useEffect(() => {
    setData(active === "Cakes & Pastries" ? productData?.cake : active === "Wigs & Braids" ? productData?.wig : productData?.access);
  }, [active]);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Products</h2>
          <div>
            {header?.map((item, index) => {
              return (
                <p key={index} className={item === active ? styles.active : ""} onClick={() => setActive(item)}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className={styles.body}
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}>
            {data?.slice(0, 6)?.map((item, index) => {
              return <SingleProduct type={item.type} key={index} title={item.title} price={item.price} text={item.text} src={item.src} id={item.id} />;
            })}
          </motion.div>
        </AnimatePresence>
        <Link href={active === "Cakes & Pastries" ? "/cakes" : active === "Wigs & Braids" ? "/wigs" : "/accessories"}>
          View all {active === "Cakes & Pastries" ? "Cakes" : active}
          <SideArrowSmallSvg color="#B8860B" />
        </Link>
      </div>
    </Layout>
  );
};
