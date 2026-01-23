import type { Product } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="container-base py-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
