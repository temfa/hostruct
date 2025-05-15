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
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/slice/cart";
import { toast } from "react-toastify";

export const RelatedProducts = ({ page, id }: { page: string; id: string }) => {
  const [data, setData] = useState<ProductProps[]>([]);
  useEffect(() => {
    setData(page === "Cakes & Pastries" ? productData?.cake : page === "Wigs & Braids" ? productData?.wig : productData?.access);
  }, [page]);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const addToCart = (item: ProductProps) => {
    const payload = {
      src: item.src,
      title: item.title,
      text: item.text,
      price: item.price,
      type: item.type,
      id: item.id,
      count: 1,
    };
    dispatch(addtoCart(payload));
    toast.success("Added to Cart Successfully!!");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Related products</h2>
        <div className={styles.body}>
          {data
            ?.filter((e) => e.id !== id)
            .slice(0, 4)
            .map((item, index) => {
              return (
                <div className={styles.productContainer} key={index}>
                  <div className={styles.image} onClick={() => router.push(`${pathname}/${item.title}`)}>
                    <Image width={243} height={275} alt="Product" src={item.src} />
                  </div>
                  <div className={styles.productBody}>
                    <div className={styles.productTop} onClick={() => router.push(`${pathname}/${item.title}`)}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <div className={styles.productBottom}>
                      <div className={styles.productLeft}>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                        <h3>{formatter(item.price)}</h3>
                      </div>
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
