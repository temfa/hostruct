"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useAppSelector } from "@/redux/store/store";
import { Layout } from "@/layout";
import { formatter } from "@/utils/helper";
import { CardSvg } from "@/svgs/card";
import Image from "next/image";
import { CartType } from "@/utils/data";

export const CheckoutBody = () => {
  const cartItems: CartType[] = useAppSelector((store) => store.cart);
  const userDetails = useAppSelector((store) => store.userDetails);
  const total = cartItems?.reduce((a, b) => a + b.price * b.count, 0);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const slimCartItems = cartItems?.map((item) => ({
      price: item.price,
      title: item.title,
      count: item.count,
    }));
    const payload = {
      name: userDetails.fullName,
      address: userDetails.address,
      phoneNumber: userDetails?.phoneNumber as string,
      total: total,
      cartItems: slimCartItems,
      message: userDetails.message,
    };

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      //   toast.success("Paid Successfully");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div />
              <p>
                Step 3 <span> of 3 </span>
              </p>
            </div>
            <div className={styles.middle}>
              <div>
                <CardSvg />
              </div>
              <p>Order Summary</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.deliveryInfo}>
                <h2>Delivery info</h2>
                <div>
                  <p>
                    Delivery info <span>{userDetails?.address}</span>
                  </p>
                  <p>
                    Phone number <span>{userDetails?.phoneNumber}</span>
                  </p>
                  <p>
                    Email <span>{userDetails?.email}</span>
                  </p>
                </div>
              </div>
              <div className={styles.deliveryInfo}>
                <h2>Request info</h2>
                <div>
                  <p>
                    Date <span>{userDetails.date}</span>
                  </p>
                  <p>
                    Request Message <span>{userDetails.message}</span>
                  </p>
                </div>
              </div>
              <div className={styles.review}>
                <h3>Review Order</h3>
                <div>
                  {cartItems?.map((item, index) => {
                    return <Image width={64} height={64} src={item.src} alt="Product" key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.order}>
              <h2>Order Summary</h2>
              <div className={styles.column}>
                <div className={styles.row}>
                  <h3>Items total</h3>
                  <h4>{formatter(total)}</h4>
                </div>
                <div className={styles.row}>
                  <h3>Delivery fee</h3>
                  <h4>{formatter(5)}</h4>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <h2>Total</h2>
              <h2>{formatter(total + 5)}</h2>
            </div>
            <p>By placing this order, you are agreeing to  Terms and Conditions.</p>
            <button onClick={submit}>{loading ? "Loading ...." : "Place Order"} </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};
