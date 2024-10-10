import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

export default function page() {
  const user = {
    nome: "João Izídio",
    email: "joaoizidio@email.com",
    idade: 20,
  };

  return (
    <>
      <Header isLogged={true} user={user} />
      <main className="p-5">
        <h1 className="text-3xl">Dasboard</h1>
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
        <div className="pt-2">
          <Link
            href="/"
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            Voltar para a Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
