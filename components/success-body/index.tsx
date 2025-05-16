"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { SuccessSvg } from "@/svgs/success";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slice/cart";
import { clearUserDetails } from "@/redux/slice/userDetails";
import Link from "next/link";

export const SuccessBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
    dispatch(clearUserDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <SuccessSvg />
          <div className={styles.body}>
            <div>
              <h2>Thank you for your order!</h2>
              <p>Your order has been accepted and will be processed shortly. </p>
            </div>
            <Link href="/">Continue Shopping</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};
