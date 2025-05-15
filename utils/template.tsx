import * as React from "react";
import { formatter } from "./helper";
import { CartType } from "./data";

interface EmailTemplateProps {
  name: string;
  address: string;
  phoneNumber: string;
  total: number;
  cartItems: CartType[];
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phoneNumber, address, total, cartItems, message }) => (
  <div>
    <h1>New Order</h1>
    <p>Dear Hostruct,</p>
    <p>
      <strong>${name}</strong> just made a new order with shipping to:
    </p>
    <p>
      <strong>${address},</strong>
    </p>
    <p>
      <strong>${phoneNumber}</strong>
    </p>
    <h2>Order Details:</h2>
    <ul>
      $
      {cartItems
        ?.map(
          (item) => `
              <li>
                <p><strong>Product Name:</strong> ${item.title}</p>
                <p><strong>Quantity:</strong> ${item.count}</p>
                <p><strong>Amount:</strong> ${formatter(item.price)}</p>
              </li>
            `
        )
        .join("")}
    </ul>
    <h3>Total Amount Paid: ${formatter(total)}</h3>
    The user also has this message <strong>{message}</strong>
    <p>Thank you for your order!</p>
  </div>
);
