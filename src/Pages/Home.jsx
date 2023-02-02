import PackageItem from "../components/PackageItem";

export default function Home({ packages }) {
  const packagesList = packages.map((item) => (
    <PackageItem item={item} key={item.id} />
  ));
  return <div>{packagesList}</div>;
}
