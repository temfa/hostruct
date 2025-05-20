import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/slice/cart";
import { toast } from "react-toastify";

export type ProductProps = {
  src: string;
  title: string;
  text: string;
  price: number;
  type: "cakes" | "wigs" | "accessories";
  id: string;
};

export const SingleProduct: FC<ProductProps> = ({ src, text, title, price, type, id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCart = () => {
    const payload = {
      src,
      title,
      text,
      price,
      type,
      id,
      count: 1,
    };
    dispatch(addtoCart(payload));
    toast.success("Added to Cart Successfully!!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.image} onClick={() => router.push(`${type}/${id}`)}>
        <Image width={293} height={332} alt="Product" src={src} />
      </div>
      <div className={styles.body}>
        <div className={styles.top} onClick={() => router.push(`${type}/${id}`)}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <button onClick={addToCart}>Add to Cart</button>
            <h3>{formatter(price)}</h3>
          </div>
          <div className={styles.white}>
            <div className={styles.black}>
              <div
                onClick={() => {
                  addToCart();
                  router.push("/cart");
                }}>
                {/* <span> */}
                <h2>Buy Now</h2>
                {/* </span> */}
                <SideArrowSmallSvg color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
