import { usePackages } from "../state/PackagesContext";

// acceptable (those divs do not convice me, something more semantic should exist)
export default function Profile() {
  const { packages } = usePackages();

  const item = packages[0];
  const { user_name, user_phone } = item;

  return (
    <main id="profile" className="container">
      <h1>Profile</h1>
      <div>
        <span>User name : </span>
        <span>{user_name}</span>
      </div>
      <div>
        <span>Mobile number : </span>
        <span>{user_phone}</span>
      </div>
      <div>
        <span>Language : </span>
        <span>English</span>
      </div>
    </main>
  );
}
