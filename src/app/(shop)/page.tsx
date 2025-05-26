import React from "react";

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function HomePage() {
  return (
    <>
      <Title title="Store" subtitle="All products" />

      <ProductGrid products={products} />
    </>
  );
}
