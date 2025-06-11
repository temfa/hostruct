import React from "react";
import styles from "./styles.module.css";
import { Layout } from "@/layout";
import Image from "next/image";

const AboutBody = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Image src="/images/hostruct.jpeg" width={500} height={500} alt="Hotruct woman" />
            <div>
              <h2>Mrs Olubukola Kabiru.</h2>
              <p>CEO/FOUNDER</p>
            </div>
          </div>
          <div className={styles.right}>
            <h2>Story behind Hostruct</h2>
            <div>
              <p>
                At Hostruct, we believe that beauty, celebration, and creativity should be part of everyday life. What started with a passion for baking has grown into a
                multi-faceted brand offering a unique blend of sweet delights, stylish hair solutions, and handcrafted fashion accessories. Our journey began with a desire to craft
                cakes and pastries that not only look stunning but taste unforgettable. Over time, that same passion for excellence and creativity extended to other expressions of
                beauty—premium wigs, braids, hair products, and handmade beads, fascinators, hats, and accessories. Today, we are proud to serve clients looking for personalized
                elegance, whether on their plate, their head, or as part of their style.
              </p>
              <p>
                From birthday/wedding cakes to bridal hairpieces, from wedding treats to fashionable wigs, every product from Hostruct is a result of thoughtful design, skilled
                craftsmanship, and genuine care. We focus on quality, detail, and the ability to customize each order to match your personality or special event. At Hostruct, we
                don’t just sell products—we create experiences, build confidence, and celebrate individuality. Whether you’re marking a milestone, upgrading your look, or
                accessorizing for a special event, we’re here to help you make a statement.
              </p>
            </div>
            <div>
              <p>We bake joy.</p>
              <p>We style beauty.</p>
              <p> We craft elegance.</p>
            </div>
          </div>
        </div>
      </Layout>
      <div className={styles.bottom}>
        <Layout>
          <div className={styles.body}>
            <div className={styles.vision}>
              <Image src="/images/vision.png" width={61} height={61} alt="Vision" />
              <h2>Vision statement</h2>
              <p>
                To be a trusted and inspiring lifestyle brand known for delivering exceptional cakes, premium hair products, and handcrafted accessories—transforming ordinary
                moments into extraordinary expressions of taste, beauty, and style.
              </p>
            </div>
            <div className={styles.line} />
            <div className={styles.vision}>
              <Image src="/images/mission.png" width={61} height={61} alt="Vision" />
              <h2>Mission statement</h2>
              <div>
                <p>• To create high-quality baked goods that delight the senses and elevate celebrations.</p>
                <p>• To provide stylish, affordable, and versatile hair solutions that empower confidence and expression.</p>
                <p>• To design distinctive handmade accessories that reflect individuality and enhance elegance.</p>
                <p>• To maintain a standard of excellence, creativity, and care in every product we deliver.</p>
                <p>• To build lasting relationships with our customers through consistency, integrity, and personalized service.</p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AboutBody;
