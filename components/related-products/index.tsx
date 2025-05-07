"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { ProductProps } from "../single-product";
import { productData } from "@/utils/data";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import Link from "next/link";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { usePathname, useRouter } from "next/navigation";

export const RelatedProducts = ({ page }: { page: string }) => {
  const [data, setData] = useState<ProductProps[]>([]);
  useEffect(() => {
    setData(page === "Cakes & Pastries" ? productData?.cake : page === "Wigs & Braids" ? productData?.wig : productData?.access);
  }, [page]);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Related products</h2>
        <div className={styles.body}>
          {data?.slice(0, 4)?.map((item, index) => {
            return (
              <div className={styles.productContainer} key={index} onClick={() => router.push(`${pathname}/${item.title}`)}>
                <div className={styles.image}>
                  <Image width={243} height={275} alt="Product" src={item.src} />
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
    </Layout>
  );
};
