import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";

export const ContactBody = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h2>Get in touch</h2>
              <p>You can fill the form to your right to leave us a message or contact us through our details for an immediate response.</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.single}>
                <h3>Email address</h3>
                <p>Bukolasalu88@gmail.com</p>
              </div>
              <div className={styles.single}>
                <h3>Phone numbers</h3>
                <p>+44 7467160789</p>
              </div>
              <div className={styles.single}>
                <h3>Social Media handles</h3>
                <div></div>
              </div>
            </div>
          </div>
          <form className={styles.right}>
            <div className={styles.form}>
              <div className={styles.group}>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className={styles.group}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Email" />
              </div>
              <div className={styles.group}>
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder="Enter Phone number" />
              </div>
              <div className={styles.group}>
                <label htmlFor="">Message</label>
                <textarea placeholder="Tell us about your request" />
              </div>
            </div>
            <button>
              Submit <SideArrowSmallSvg color="white" />
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};
