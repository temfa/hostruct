import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { WhiteStarSvg } from "@/svgs/white-star";
import { OrangeStarSvg } from "@/svgs/orange-star";

export const Testimonials = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>What Our Clients Say</h2>
        <div className={styles.body}>
          <div className={styles.first}>
            <div className={styles.content}>
              <div>
                <WhiteStarSvg />
              </div>
              <h3>Reliable and Highly recommended!</h3>
              <p>
                I ordered a birthday cake for my daughter’s 5th birthday and it was absolutely beautiful and delicious! The design was exactly what I asked for, and the guests
                couldn’t stop complimenting it. Highly recommend!
              </p>
            </div>
            <div className={styles.details}>
              <div className={styles.name}>
                <h4>Chinyere, </h4>
                <p>Bath UK</p>
              </div>
              <div className={styles.white}>
                <div className={styles.orange}>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.contents}>
              <div>
                <OrangeStarSvg />
              </div>
              <h3>Quality!</h3>
              <p>
                I bought a braided wig and it was so natural-looking and lightweight! I’ve received so many compliments. Plus, the quality is top notch—it’s my go-to for events
                now.
              </p>
            </div>
            <div className={styles.detail}>
              <div className={styles.names}>
                <h4>Brenda </h4>
                <p>Aberdeen</p>
              </div>
              <div className={styles.grey}>
                <div className={styles.black}>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.contents}>
              <div>
                <OrangeStarSvg />
              </div>
              <h3>Perfect!</h3>
              <p>I wore one of her fascinators to a wedding, and I stood out in the best way possible. It was elegant, well-made, and perfectly matched my outfit!</p>
            </div>
            <div className={styles.detail}>
              <div className={styles.names}>
                <h4>Debbie</h4>
                <p>UK</p>
              </div>
              <div className={styles.grey}>
                <div className={styles.black}>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
