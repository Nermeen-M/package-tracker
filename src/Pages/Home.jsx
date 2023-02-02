import Packages from "../components/Packages";

export default function Home({ packages }) {
  return (
    <div>
      Home
      <Packages packages={packages} />
    </div>
  );
}
