"use client";
import React from "react";
import styles from "./styles.module.css";
import { CardSvg } from "@/svgs/card";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserDetails } from "@/utils/data";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/slice/userDetails";

export const Delivery = () => {
  const cartItems = useAppSelector((store) => store.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserDetails>();
  const submit: SubmitHandler<UserDetails> = (e) => {
    const payload = {
      fullName: e.fullName,
      email: e.email,
      phoneNumber: e.phoneNumber,
      address: e.address,
      date: e.date,
      message: e.message,
    };

    dispatch(setUserDetails(payload));
    router.push("/checkout");
    setTimeout(() => {
      reset();
    }, 3000);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.line}>
            <div />
          </div>
          <p>
            Step 2 <span>of 3</span>
          </p>
        </div>
        <div className={styles.middle}>
          <div>
            <CardSvg />
          </div>
          <p>Delivery Information</p>
        </div>
        <div className={styles.body}>
          <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <div className={styles.group}>
              <label>Full Name *</label>
              <input type="text" placeholder="Enter full name" {...register("fullName", { required: "Full Name is required" })} name="fullName" />
              {errors.fullName && (
                <p role="alert" className="error">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label>Email *</label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                name="email"
              />
              {errors.email && (
                <p role="alert" className="error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label>Phone Number *</label>
              <input type="text" placeholder="Enter Phone Number" {...register("phoneNumber", { required: "Phone Number is required" })} name="phoneNumber" />
              {errors.phoneNumber && (
                <p role="alert" className="error">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label>Delivery Address *</label>
              <input type="text" placeholder="Enter Delivery Address" {...register("address", { required: "Delivery Address is required" })} name="address" />
              {errors.address && (
                <p role="alert" className="error">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label>Request Date *</label>
              <input type="date" placeholder="Enter Delivery Address" {...register("date", { required: "Request Date is required" })} name="date" />
              {errors.date && (
                <p role="alert" className="error">
                  {errors.date.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label>Request Message *</label>
              <textarea placeholder="Tell us about your request" {...register("message", { required: "Request Message is required" })} name="message" />
              {errors.message && (
                <p role="alert" className="error">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button type="submit">
              Proceed to checkout <SideArrowSmallSvg color="white" />
            </button>
          </form>
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
    </div>
  );
};
