"use client";
import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { MyCartSvg } from "@/svgs/my-cart";
import { CaretRightSvg } from "@/svgs/caret-right";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import { RemoveSvg } from "@/svgs/remove";
import { AddSvg } from "@/svgs/add";
// import { ProductProps } from "../single-product";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { addtoCart, reducetoCart, removeFromCart } from "@/redux/slice/cart";
import { useRouter } from "next/navigation";

export const CartBody = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useAppSelector((store) => store.cart);
  const total = cartItems?.reduce((a, b) => a + b.price * b.count, 0);

  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.top}>
              <span>
                <MyCartSvg />
              </span>
              <div className={styles.myCart}>
                <h2>My Cart</h2>
                <div className={styles.accord}>
                  <p>Home</p>
                  <CaretRightSvg />
                  <p>My cart</p>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <h2>Items Name</h2>
              {cartItems?.map((item, index) => {
                return (
                  <div className={styles.single} key={index}>
                    <div className={styles.cartLeft}>
                      <Image src={item.src} width={64} height={64} alt="Product" />
                      <div>
                        <h2>{item.title}</h2>
                        <p>{formatter(item.price)}</p>
                      </div>
                    </div>
                    <div className={styles.cartRight}>
                      <div className={styles.actions}>
                        <div>
                          <span
                            onClick={() => {
                              if (item.count !== 1) dispatch(reducetoCart(item));
                            }}>
                            <RemoveSvg />
                          </span>
                          <p>{item.count}</p>
                          <span onClick={() => dispatch(addtoCart(item))}>
                            <AddSvg />
                          </span>
                        </div>
                        <p onClick={() => dispatch(removeFromCart(item))}>Remove</p>
                      </div>
                      <h2>{formatter(item.price * item.count)}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.step}>
              <div className={styles.line}>
                <div />
              </div>
              <p>
                Step 1 <span>of 3</span>
              </p>
            </div>
            <div className={styles.summary}>
              <h2>Order Summary</h2>
              <div className={styles.row}>
                <h3>Items total</h3>
                <h3>{formatter(total)}</h3>
              </div>
              <div className={styles.row}>
                <h2>Subtotal</h2>
                <h1>{formatter(total)}</h1>
              </div>
              <div className={styles.proceed} onClick={() => router.push("/delivery-info")}>
                <p>Proceed</p>
                <h2>{formatter(total)}</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
