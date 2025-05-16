"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { ArrowCircleLeft } from "@/svgs/arrow-circle-left";
import { ArrowCircleRight } from "@/svgs/arrow-circle-right";
import Image from "next/image";
import { SideArrowSvg } from "@/svgs/side-arrow";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { bannerData } from "@/utils/data";
import { motion, AnimatePresence } from "framer-motion";

export const Banner = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <div
        className={styles.sideArrow}
        onClick={() => {
          if (active === 0) setActive(2);
          else setActive(active - 1);
        }}>
        <ArrowCircleLeft />
      </div>
      <div className={styles.body}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className={styles.left}>
            <h2>{bannerData[active].subtitle}</h2>
            <h3>{bannerData[active].title} </h3>
            <p>{bannerData[active].text}</p>
            <div className={styles.action}>
              <Link href={bannerData[active].link}>
                {bannerData[active].linkText} <SideArrowSmallSvg color="white" />
              </Link>
              <Link href="/contact">
                Contact us <SideArrowSmallSvg color="#B8860B" />
              </Link>
            </div>
            <div className={styles.actionArrow}>
              <div
                className={styles.sideArrow}
                onClick={() => {
                  if (active === 0) setActive(2);
                  else setActive(active - 1);
                }}>
                <ArrowCircleLeft />
              </div>
              <div
                className={styles.sideArrow}
                onClick={() => {
                  if (active === bannerData.length - 1) setActive(0);
                  else setActive(active + 1);
                }}>
                <ArrowCircleRight />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className={styles.right}>
            <div className={styles.happy}>
              <p>Happy Customers</p>
              <h2>
                {bannerData[active].number} <span>+</span>
              </h2>
            </div>
            <Image width={520.19} height={554.56} alt="Banner" src={bannerData[active].image} />
            <div className={styles.arrow}>
              <SideArrowSvg />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className={styles.sideArrow}
        onClick={() => {
          if (active === bannerData.length - 1) setActive(0);
          else setActive(active + 1);
        }}>
        <ArrowCircleRight />
      </div>
    </div>
  );
};
