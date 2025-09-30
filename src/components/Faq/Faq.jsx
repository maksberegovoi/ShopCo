import React from "react";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Frequently Asked Questions</h3>

      <div className={styles.item}>
        <h4>How do I choose the right size for this product?</h4>
        <p>
          We recommend checking our detailed size guide available in the product
          images. This item generally runs true to size. If you're between
          sizes, we suggest sizing up for a more comfortable fit. For specific
          measurements, please refer to the size chart where you'll find exact
          dimensions for chest width, length, and sleeve measurements. Remember
          that different materials may have varying stretch characteristics, so
          consider the fabric composition when making your selection. If you
          need additional assistance, our customer service team is available to
          help you find the perfect fit.
        </p>
      </div>

      <div className={styles.item}>
        <h4>
          What is the material composition and how should I care for this item?
        </h4>
        <p>
          This product is crafted from premium 100% organic cotton with a fabric
          weight of 180 gsm, ensuring both durability and comfort. For optimal
          care, we recommend machine washing cold with similar colors, using
          mild detergent. Tumble dry on low heat or air dry for best results.
          Avoid using bleach or fabric softeners as they may affect the
          material's quality and color vibrancy over time. Iron on medium heat
          if needed, but inside out to preserve any prints or embroidery. Proper
          care will maintain the item's shape and appearance for extended wear.
        </p>
      </div>

      <div className={styles.item}>
        <h4>What is your return and exchange policy?</h4>
        <p>
          We offer a 30-day return policy from the date of delivery for all
          unused items in their original packaging with tags attached. Exchanges
          are subject to availability and can be processed for size or color
          variations. To initiate a return or exchange, please visit our returns
          portal and enter your order number and email address. Return shipping
          is free for defective items, while standard returns may incur a
          shipping fee. Refunds are processed within 5-7 business days after we
          receive your return. For international orders, please note that custom
          duties and original shipping costs are non-refundable.
        </p>
      </div>

      <div className={styles.item}>
        <h4>How long does shipping take and what are my delivery options?</h4>
        <p>
          Standard shipping typically takes 3-5 business days within the
          continental US, while express shipping delivers in 1-2 business days.
          International shipping times vary by destination but generally range
          from 7-14 business days. During peak seasons or promotional periods,
          please allow additional processing time. You'll receive tracking
          information via email once your order ships. We also offer free
          standard shipping on orders over $50. For urgent deliveries, same-day
          shipping may be available in select metropolitan areas - please
          contact our customer service team to check availability in your
          location.
        </p>
      </div>

      <div className={styles.item}>
        <h4>
          Is this product authentic and what is the quality assurance process?
        </h4>
        <p>
          Yes, all our products are 100% authentic and sourced directly from
          authorized manufacturers and distributors. Each item undergoes
          rigorous quality control checks before shipping, including inspection
          for construction integrity, material quality, color accuracy, and
          overall workmanship. We maintain direct relationships with our
          suppliers to ensure consistent quality standards. Our quality
          assurance team examines random samples from each production batch, and
          we stand behind every product with our satisfaction guarantee. If you
          have any concerns about product authenticity or quality, please reach
          out to our customer support team with photos and details for immediate
          assistance.
        </p>
      </div>
    </div>
  );
};

export default Faq;
