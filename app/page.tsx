import { Banner } from "@/components/banner";
import { FeaturedProducts } from "@/components/featured";
import { HomeFaq } from "@/components/home-faq";
import { Testimonials } from "@/components/testimonials";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <>
      <Banner />
      <Why />
      <FeaturedProducts />
      <Testimonials />
      <HomeFaq />
    </>
  );
}
