import Details from "@/components/details";
import { RelatedProducts } from "@/components/related-products";
import React from "react";

const ProductDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <Details id={decodeURI(slug)} type="Wigs & Braids" />
      <RelatedProducts page="Wigs & Braids" id={decodeURI(slug)} />
    </>
  );
};

export default ProductDetails;
