import RoccoStyleHero from "@/components/home/RoccoStyleHero";
import WhyProplastics from "@/components/home/WhyProplastics";
import RoccoStyleVendors from "@/components/home/RoccoStyleVendors";
import RoccoStyleProducts from "@/components/home/RoccoStyleProducts";
import RoccoStyleOrdering from "@/components/home/RoccoStyleOrdering";
import RoccoStyleTerritories from "@/components/home/RoccoStyleTerritories";

export default function Home() {
  return (
    <>
      <RoccoStyleHero />
      <WhyProplastics />
      <RoccoStyleVendors />
      <RoccoStyleProducts />
      <RoccoStyleOrdering />
      <RoccoStyleTerritories />
    </>
  );
}
