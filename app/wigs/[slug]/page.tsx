import Details from "@/components/details";
import { RelatedProducts } from "@/components/related-products";
import React from "react";

const ProductDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <Details
        src="/images/wig1.png"
        name={decodeURI(slug)}
        type="Wigs & Braids"
        price={27}
        details="Our three-layer 8-inch gold flare cake is a nice cake for a
special birthday celebration. It has a unique white body
and gold streaks on it."
      />
      <RelatedProducts page="Wigs & Braids" />
    </>
  );
};

export default ProductDetails;
