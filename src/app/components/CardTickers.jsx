/* eslint-disable react/jsx-key */

export default function CardTickers({ tickers }) {
  return (
    <main className="p-5">
      <div className="text-white">
        <div className="grid grid-cols-3 gap-4">
          {tickers.map((ticker) => (
            <>
              <div className="bg-slate-800 p-5 rounded-md col-span-1">
                <h2 className="text-2xl">{ticker.name}</h2>
                <p>Simbolo: {ticker.symbol}</p>
                <p>Preço: {ticker.price}</p>
                <p>Variação: {ticker.change}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="pt-2">
        <button
          type="button"
          className="bg-slate-600 text-white px-3 py-2 rounded-md"
        >
          Criar novo ticker
        </button>
      </div>
    </main>
  );
}
