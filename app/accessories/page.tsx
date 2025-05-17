import { ProductPage } from "@/components/product";
import { ProductBanner } from "@/components/product-banner";
import { ProductContact } from "@/components/product-contact";
import { productData } from "@/utils/data";
import React from "react";

const Accessories = () => {
  return (
    <>
      <ProductBanner src="/images/access-page-banner.png" mobile="/images/access-page-mobile.png" />
      <ProductPage page="Accessories" filterData={["Fascinators", "Custom hats", "Beaded earrings", "Necklaces", "Bridal hair"]} products={productData.access} />
      <ProductContact />
    </>
  );
};

export default Accessories;
