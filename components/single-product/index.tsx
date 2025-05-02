import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

export type ProductProps = {
  src: string;
  title: string;
  text: string;
  price: number;
};

export const SingleProduct: FC<ProductProps> = ({ src, text, title, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image width={293} height={332} alt="Product" src={src} />
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.bottom}>
          <h3>{formatter(price)}</h3>
          <div className={styles.white}>
            <div className={styles.black}>
              <Link href="">
                <span>
                  <h2>Buy Now</h2>
                </span>
                <SideArrowSmallSvg color="white" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
