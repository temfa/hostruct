"use client";
import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import { SideArrowSmallSvg } from "@/svgs/side-arrow-small";
import FacebookOrangeSvg from "@/svgs/facebookOrange";
import InstagramOrangeSvg from "@/svgs/instagramOrange";
import TiktokOrangeSvg from "@/svgs/tiktokOrange";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export const ContactBody = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (e) => {
    try {
      const data = {
        name: e.fullName,
        message: e.message,
        email: e.email,
        phoneNumber: e.phoneNumber,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      await fetch(`/api/send-mail`, options);
      toast.success("Message sent Successfully!!!");
      reset();
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h2>Get in touch</h2>
              <p>You can fill the form to your right to leave us a message or contact us through our details for an immediate response.</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.single}>
                <h3>Email address</h3>
                <p>Bukolasalu88@gmail.com</p>
              </div>
              <div className={styles.single}>
                <h3>Phone numbers</h3>
                <p>+44 7467160789</p>
              </div>
              <div className={styles.single}>
                <h3>Social Media handles</h3>
                <div>
                  <FacebookOrangeSvg />
                  <InstagramOrangeSvg />
                  <TiktokOrangeSvg />
                </div>
              </div>
            </div>
          </div>
          <form className={styles.right} onSubmit={handleSubmit(submit)}>
            <div className={styles.form}>
              <div className={styles.group}>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter full name" {...register("fullName", { required: "Full Name is required" })} />
                {errors.fullName && (
                  <p role="alert" className="error">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className={styles.group}>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="error">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className={styles.group}>
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder="Enter Phone number" {...register("phoneNumber", { required: "Phone Number is required" })} />
                {errors.phoneNumber && (
                  <p role="alert" className="error">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className={styles.group}>
                <label htmlFor="">Message</label>
                <textarea placeholder="Tell us about your request" {...register("message", { required: "Message is required" })} />
                {errors.message && (
                  <p role="alert" className="error">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <button type="submit">
              Submit <SideArrowSmallSvg color="white" />
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};
