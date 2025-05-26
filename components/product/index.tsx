"use client";
import React, { FC, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Layout } from "../../layout";
import { CaretRightSvg } from "@/svgs/caret-right";
import { ProductProps } from "../single-product";
import Image from "next/image";
// import { formatter } from "@/utils/helper";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { usePathname, useRouter } from "next/navigation";
import { ArrowCircleLeft } from "@/svgs/arrow-circle-left";
import { ArrowCircleRight } from "@/svgs/arrow-circle-right";
// import { useDispatch } from "react-redux";
// import { addtoCart } from "@/redux/slice/cart";
// import { toast } from "react-toastify";

type Props = {
  page: string;
  filterData: string[];
  products: ProductProps[];
};

export const ProductPage: FC<Props> = ({ page, filterData, products }) => {
  const pathname = usePathname();
  // const dispatch = useDispatch();
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedItems = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const addToCart = (item: ProductProps) => {
  //   const payload = {
  //     src: item.src,
  //     title: item.title,
  //     text: item.text,
  //     price: item.price,
  //     type: item.type,
  //     id: item.id,
  //     count: 1,
  //   };
  //   dispatch(addtoCart(payload));
  //   toast.success("Added to Cart Successfully!!");
  // };

  return (
    <Layout>
      <div className={styles.container} ref={targetRef}>
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
              {paginatedItems?.map((item, index) => {
                return (
                  <div className={styles.productContainer} key={index}>
                    <div className={styles.image} onClick={() => router.push(`${pathname}/${item.id}`)}>
                      <Image width={250} height={283} alt="Product" src={item.src} />
                    </div>
                    <div className={styles.productBody}>
                      <div className={styles.productTop} onClick={() => router.push(`${pathname}/${item.id}`)}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                      <div className={styles.productBottom}>
                        <div className={styles.productLeft}>
                          {/* <button onClick={() => addToCart(item)}>Add to Cart</button>
                          <h3>{formatter(item.price)}</h3> */}
                        </div>
                        <div className={styles.white}>
                          <div className={styles.black}>
                            <div
                              onClick={() => {
                                // addToCart(item);
                                router.push("/contact");
                              }}>
                              <h2>Buy Now</h2>
                              <span>
                                <SideArrowSmallSvg color="white" />{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className={styles.pagination}>
                <button className={styles.arrow} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <ArrowCircleLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => handlePageChange(page)} className={page === currentPage ? styles.active : styles.number}>
                    {page}
                  </button>
                ))}
                <button className={styles.arrow} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <ArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
