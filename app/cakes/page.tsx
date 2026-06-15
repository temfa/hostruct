import { ProductPage } from "@/components/product";
import { ProductBanner } from "@/components/product-banner";
import { ProductContact } from "@/components/product-contact";
import { productData } from "@/utils/data";
import React from "react";

const Cakes = () => {
  return (
    <>
      <ProductBanner src="/images/cake.jpeg" />
      <ProductPage
        page="Cakes & Pastries"
        filterData={["Single Layer", "Tiered celebration", "Birthday", "Wedding", "Birthday", "Cupcakes and pastries"]}
        products={productData.cake}
      />
      <ProductContact />
    </>
  );
};

export default Cakes;
