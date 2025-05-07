"use client";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../layout";
import { CaretRightSvg } from "@/svgs/caret-right";
import { ProductProps } from "../single-product";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  page: string;
  filterData: string[];
  products: ProductProps[];
};

export const ProductPage: FC<Props> = ({ page, filterData, products }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.accord}>
          <p>Home</p>
          <CaretRightSvg />
          <p>{page}</p>
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <h2>Filter</h2>
            <div className={styles.filter}>
              <div className={styles.price}>
                <h2>Price</h2>
                <div>
                  <input type="text" placeholder="Enter Min" />
                  <input type="text" placeholder="Enter Max" />
                </div>
              </div>
              <div className={styles.type}>
                <h2>{page}</h2>
                <div className={styles.typeBody}>
                  {filterData?.map((item, index) => {
                    return (
                      <div key={index}>
                        <input type="checkbox" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <select>
                <option value="">Sort: Popular</option>
              </select>
            </div>
            <div className={styles.bottom}>
              {products?.map((item, index) => {
                return (
                  <div className={styles.productContainer} key={index} onClick={() => router.push(`${pathname}/${item.title}`)}>
                    <div className={styles.image}>
                      <Image width={250} height={283} alt="Product" src={item.src} />
                    </div>
                    <div className={styles.productBody}>
                      <div className={styles.productTop}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                      <div className={styles.productBottom}>
                        <h3>{formatter(item.price)}</h3>
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
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
