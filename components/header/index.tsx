"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import Image from "next/image";
import { navbarLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartSvg } from "@/svgs/cart";
import { useAppSelector } from "@/redux/store/store";
import { BarsSvg } from "@/svgs/bars";

export const Header = () => {
  const pathname = usePathname();

  const cartItems = useAppSelector((store) => store.cart);
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.container}>
      <Layout>
        <div className={mobile ? `${styles.wrapper} ${styles.mobile}` : styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/images/hostruct.png" width={176} height={25} alt="Logo" />
            <div className={styles.side}>
              <div>
                <Link href="/cart">
                  <span>
                    <CartSvg />
                    <p>{cartItems.length}</p>
                  </span>
                  <p>Cart</p>
                </Link>
              </div>
              <BarsSvg action={() => setMobile(!mobile)} />
            </div>
          </div>
          <div className={styles.navbar}>
            {navbarLinks?.map((item, index) => {
              return (
                <Link href={item.link} key={index} className={pathname === item.link ? styles.active : ""} onClick={() => setMobile(false)}>
                  {item.text}
                </Link>
              );
            })}
          </div>
          <div className={styles.action}>
            <div>
              <Link href="/cart">
                <span>
                  <CartSvg />
                  <p>{cartItems.length}</p>
                </span>
                <p>Cart</p>
              </Link>
            </div>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};
