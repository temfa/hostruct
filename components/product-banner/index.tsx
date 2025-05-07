import { Layout } from "@/layout";
import Image from "next/image";
import React from "react";

export const ProductBanner = ({ src }: { src: string }) => {
  return (
    <Layout>
      <Image src={src} width={1241} height={398} alt="banner" />
    </Layout>
  );
};
