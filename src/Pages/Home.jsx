import PackageItem from "../components/PackageItem";

export default function Home({ packages }) {
  const packagesList = packages.map((item) => (
    <PackageItem item={item} key={item.id} />
  ));
  return (
    <main id="home">
      <section className="Hero">Hero</section>
      <section className="packages">
        <div className="container">
          <h2>Packages</h2>
          <div className="list">{packagesList}</div>
        </div>
      </section>
    </main>
  );
}
