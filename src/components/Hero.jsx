import image from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={image} alt="Parcels and location pin" />
      <h1>InstaPacket</h1>
      <h2>Easy way to track your package</h2>
    </section>
  );
}
