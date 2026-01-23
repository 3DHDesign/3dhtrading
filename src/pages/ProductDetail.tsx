import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, PRODUCTS } from "../data/products";
import ProductGallery from "../components/product/ProductGallery";
import ProductSummary from "../components/product/ProductSummary";
import ProductTabs from "../components/product/ProductTabs";
import RelatedProducts from "../components/product/RelatedProducts";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = slug ? getProductBySlug(slug) : undefined;

  const related = useMemo(() => {
    if (!p) return PRODUCTS.slice(0, 8);
    return PRODUCTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 10);
  }, [p]);

  if (!p) {
    return (
      <div className="container-base py-16">
        <div className="rounded-[22px] border border-[var(--border)] bg-white p-8">
          <h1 className="text-2xl font-extrabold text-[var(--dark)]">Product not found</h1>
          <p className="mt-2 text-[var(--muted)]">
            Please go back to the shop and select a product.
          </p>
          <Link to="/shop" className="btn-primary inline-block mt-6 px-6 py-3">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <div className="container-base pt-8 pb-10">
        <div className="text-sm text-[var(--muted)]">
          <Link to="/shop" className="hover:text-[var(--dark)]">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--dark)] font-semibold">{p.name}</span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ProductGallery images={p.images} />
          </div>
          <div className="lg:col-span-6">
            <ProductSummary p={p} />
          </div>
        </div>

        <div className="mt-6">
          <ProductTabs p={p} />
        </div>
      </div>

      <RelatedProducts items={related} />
    </main>
  );
}
