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
              <h2>Olubukola Kabiru.</h2>
              <p>CEO/FOUNDER</p>
            </div>
          </div>
          <div className={styles.right}>
            <h2>Story behind Hostruct</h2>
            <div>
              <p>
                Hostruct was born from the creative spark and entrepreneurial spirit of its founder, Olubukola Kabiru, whose passion for baking, beauty, and self-expression began
                during her university days at the University of Lagos. What started as a simple love for baking—guided by recipe books and baking for friends—quickly grew into
                something more. Alongside making cakes, she began styling hair and curating fashion accessories, discovering joy in helping people feel confident, celebrated, and
                cared for. Driven by a deep desire to combine creativity with excellence, she transformed her hobbies into a multi-faceted business that now serves customers with:
              </p>
              <div>
                <p>Delicious cakes crafted with premium ingredients and artistic flair.</p>
                <p>Elegant accessories that elevate everyday and special occasions.</p>
                <p>Professional hair styling that blends beauty with confidence</p>
              </div>
              <p>
                From baking free birthday cakes to friends, to selling her first handmade accessory, to styling bridal hair on weekends, Olubukola Kabiru built Hostruct one
                relationship and one satisfied client at a time. Today, Hostruct stands as a symbol of passion, precision, and purpose—serving as a hub for celebrations, style, and
                self-care. The journey from humble beginnings to a growing brand continues to inspire others, especially young women looking to turn their creativity into a calling
              </p>
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
                To become a trusted lifestyle brand known for creativity, excellence, and heartfelt service across baking, beauty, and fashion—empowering individuals to celebrate,
                express, and elevate themselves with confidence and joy.
              </p>
            </div>
            <div className={styles.line} />
            <div className={styles.vision}>
              <Image src="/images/mission.png" width={61} height={61} alt="Vision" />
              <h2>Mission statement</h2>
              <p>
                To celebrate life’s moments by delivering high-quality cakes, stylish accessories, and exceptional hair services that inspire confidence, joy, and beauty in every
                customer—while creating memorable experiences that reflect care, creativity, and authenticity.
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AboutBody;
