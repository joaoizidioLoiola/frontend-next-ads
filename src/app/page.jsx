import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-3xl">
          Lorem ipsum dolor
          <Image
            src={"/img/logoR.png"}
            width={250}
            height={250}
            alt="Logo React"
          />
        </h1>{" "}
        sit amet consectetur adipisicing elit. Suscipit, ipsum? Temporibus ullam
        ut recusandae voluptatum hic atque quas pariatur omnis nesciunt! Esse
        eum possimus maxime eius nihil at dolor alias.
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          molestiae ipsa obcaecati sed, dicta consequatur nisi ut neque
          mollitia. Voluptatem rerum natus et in provident dolores, quos
          consequatur perspiciatis non?
        </p>
      </main>
      <Footer />
    </>
  );
}
