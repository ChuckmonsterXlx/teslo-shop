import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed";
import { ValidCategory } from "@/interfaces";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: ValidCategory;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<ValidCategory, string> = {
    men: "Products for men",
    women: "Products for women",
    kid: "Products for kid",
    unisex: "Products for all",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title title={labels[id]} subtitle="All products" />

      <ProductGrid products={products} />
    </>
  );
}
