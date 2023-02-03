import Hero from "../components/Hero";
import PackageItem from "../components/PackageItem";

import { usePackages } from "../state/PackagesContext";

export default function Home() {
  const { packages } = usePackages();
  const packagesList = packages.map((item) => (
    <PackageItem item={item} key={item.id} />
  ));

  return (
    <main id="home">
      <Hero />
      <section className="packages">
        <div className="container">
          <h2>Packages</h2>
          <div className="list">{packagesList}</div>
        </div>
      </section>
    </main>
  );
}
