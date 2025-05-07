import React, { FC } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import Image from "next/image";
import { CaretRightSvg } from "@/svgs/caret-right";
import { formatter } from "@/utils/helper";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

type Props = {
  src: string;
  name: string;
  price: number;
  type: string;
  details: string;
};

const Details: FC<Props> = ({ src, name, price, type, details }) => {
  const colors = ["#DD3333", "#F2F2F2", "#1E73BE", "#11B859", "#EF0C80", "#DD4621", "#7A533C", "#800080", "#EEEE22"];
  return (
    <Layout>
      <div className={styles.container}>
        <Image width={560} height={664} alt="details" src={src} />
        <div className={styles.wrapper}>
          <div className={styles.accord}>
            <p>Home</p>
            <CaretRightSvg />
            <p>{type}</p>
            <CaretRightSvg />
            <p>{name}</p>
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <div>
                <h2>{name}</h2>
                <p>{formatter(price)}</p>
              </div>
              <p>{details}</p>
            </div>
            <div className={styles.bottom}>
              {type === "Cakes & Pastries" && (
                <>
                  <div className={styles.group}>
                    <label>Cake Flavour</label>
                    <select>
                      <option value="">Choose an Option</option>
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label>Cake Size</label>
                    <select>
                      <option value="">Choose cake size</option>
                    </select>
                  </div>
                </>
              )}
              <div className={styles.colorContainer}>
                <p>Colour Preference</p>
                <div className={styles.colors}>
                  {colors?.map((item, index) => {
                    return <div style={{ backgroundColor: item }} key={index} />;
                  })}
                </div>
              </div>
              {type === "Cakes & Pastries" && (
                <div className={styles.cakeMessage}>
                  <h3>Cake Message</h3>
                  <p>What should we write on your cake?</p>
                  <input type="text" placeholder="E.g. Happy Birthday John" />
                </div>
              )}
              <div className={styles.quantity}>
                <p>Quantity:</p>
                <div>
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </div>
              <div className={styles.count}>
                <div className={styles.details}>
                  <div className={styles.single}>
                    <p>Product total</p>
                    <h2>{formatter(price)}</h2>
                  </div>
                  <div className={styles.single}>
                    <p>Options total</p>
                    <h2>{formatter(0)}</h2>
                  </div>
                  <div className={styles.single}>
                    <p>Grand total</p>
                    <h2>{formatter(price)}</h2>
                  </div>
                </div>
                <button>
                  Request Now <SideArrowSmallSvg color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
