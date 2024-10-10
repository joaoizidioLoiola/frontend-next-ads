import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header isLogged={false} user={{}} />
      <main className="p-5">
        <h1 className="text-3xl">Lorem ipsum dolor</h1>
        <Image
          src={"/img/React.webp"}
          width={50}
          height={50}
          alt="Logo React"
        />
        <p>
          sit amet consectetur adipisicing elit. Suscipit, ipsum? Temporibus
          ullam ut recusandae voluptatum hic atque quas pariatur omnis nesciunt!
          Esse eum possimus maxime eius nihil at dolor alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestiae ipsa obcaecati sed, dicta consequatur nisi ut neque
          mollitia. Voluptatem rerum natus et in provident dolores, quos
          consequatur perspiciatis non?
        </p>
        <div className="flex justify-around pt-2">
          <Link
            href="/dashboard"
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            Ir para a Dashboard
          </Link>

          <Link
            href="/tickers"
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            Ir para a Tickers
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
