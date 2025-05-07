import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

export const ProductContact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Contact us — let’s create something special.</h2>
          <p>We’d love to hear about the special cake you have in mind — reach out and let’s create something truly meaningful together.</p>
        </div>
        <form className={styles.right}>
          <div className={styles.form}>
            <div className={styles.group}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your Full Name" />
            </div>
            <div className={styles.group}>
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className={styles.group}>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your Phone Number" />
            </div>
            <div className={styles.group}>
              <label>Message</label>
              <textarea placeholder="Tell us about your request" />
            </div>
          </div>
          <button>
            Submit <SideArrowSmallSvg color="white" />
          </button>
        </form>
      </div>
    </Layout>
  );
};
