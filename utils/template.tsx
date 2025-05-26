import * as React from "react";
// import { formatter } from "./helper";
// import { CartType } from "./data";

interface EmailTemplateProps {
  name: string;
  // address: string;
  phoneNumber: string;
  // total: number;
  // cartItems: CartType[];
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phoneNumber, email, message }) => (
  <div>
    <p>Dear Hostruct,</p>
    <p>
      {message}
      {/* <strong>{name}</strong> with phone number {phoneNumber} and email {email} sent this message concerning just made a new order with shipping to: */}
    </p>
    <p>
      <strong>Name</strong>: {name}
    </p>
    <p>
      <strong>Phone Number</strong>: {phoneNumber}
    </p>
    <p>
      <strong>Email</strong>: {email}
    </p>
    {/* <p>
      <strong>{address}</strong>
    </p>
    <p>
      <strong>{phoneNumber}</strong>
    </p>
    <h2>Order Details:</h2>
    <ul>
      {cartItems?.map((item, index) => (
        <li key={index}>
          <p>
            <strong>Product Name:</strong> {item.title}
          </p>
          <p>
            <strong>Quantity:</strong> {item.count}
          </p>
          <p>
            <strong>Amount:</strong> {formatter(item.price)}
          </p>
        </li>
      ))}
    </ul>
    <h3>Total Amount Paid: {formatter(total)}</h3>
    <p>
      The user also has this message: <strong>{message}</strong>
    </p>
    <p>Thank you for your order!</p> */}
  </div>
);
