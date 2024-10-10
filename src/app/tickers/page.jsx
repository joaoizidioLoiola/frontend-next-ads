import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import CardTickers from "../components/CardTickers";

export default function Tickers() {
  const user = {
    nome: "João Izídio",
    email: "joaoizidio@email.com",
    idade: 20,
  };

  const tickers = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: 50000,
      change: 0.5,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: 3000,
      change: 0.7,
    },
    {
      symbol: "LTC",
      name: "Litecoin",
      price: 200,
      change: 0.3,
    },
  ];

  return (
    <>
      <Header isLogged={true} user={user} />
      <main className="bg-slate-300 text-black p-5">
        <h1 className="text-3xl">Tickers</h1>
        <CardTickers tickers={tickers} />

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
