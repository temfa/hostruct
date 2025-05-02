"use client";
import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import Image from "next/image";
import { navbarLinks } from "@/utils/data";
import Link from "next/link";
import { SearchSvg } from "@/svgs/search";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/images/hostruct.png" width={176} height={25} alt="Logo" />
          </div>
          <div className={styles.navbar}>
            {navbarLinks?.map((item, index) => {
              return (
                <Link href={item.link} key={index} className={pathname === item.link ? styles.active : ""}>
                  {item.text}
                </Link>
              );
            })}
          </div>
          <div className={styles.action}>
            <SearchSvg />
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};
