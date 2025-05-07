import { ProductPage } from "@/components/product";
import { ProductBanner } from "@/components/product-banner";
import { ProductContact } from "@/components/product-contact";
import { productData } from "@/utils/data";
import React from "react";

const Wigs = () => {
  return (
    <>
      <ProductBanner src="/images/wig-page-banner.png" />
      <ProductPage page="Wigs & Braids" filterData={["Human hair wigs", "Braided wigs", "Braids", "Pre-stretched braids", "Hair care products"]} products={productData.wig} />
      <ProductContact />
    </>
  );
};

export default Wigs;
