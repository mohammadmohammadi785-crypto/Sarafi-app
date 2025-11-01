import { useEffect, useState } from "react";

function AfghaniExchange() {
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [pkr, setPkr] = useState(0);
  const [irr, setIrr] = useState(0);
  const [tl, setTl] = useState(0);
  const [date, setDate] = useState("");

  async function fetDataDolor() {
    const respons = await fetch(
      "https://v6.exchangerate-api.com/v6/939b9463f593985ae1ccf0ba/latest/USD"
    );
    const data = await respons.json();
    setUsd(data.conversion_rates.AFN);
    setDate(data.time_last_update_utc);
  }
  async function fetDataIr() {
    const respons = await fetch(
      "https://v6.exchangerate-api.com/v6/939b9463f593985ae1ccf0ba/latest/IRR"
    );
    const data = await respons.json();
    setIrr(data.conversion_rates.AFN);
  }
  async function fetDataEuaro() {
    const respons = await fetch(
      "https://v6.exchangerate-api.com/v6/939b9463f593985ae1ccf0ba/latest/EUR"
    );
    const data = await respons.json();
    setEur(data.conversion_rates.AFN);
  }
  async function fetDataPkr() {
    const respons = await fetch(
      "https://v6.exchangerate-api.com/v6/939b9463f593985ae1ccf0ba/latest/PKR"
    );
    const data = await respons.json();
    setPkr(data.conversion_rates.AFN);
  }
  async function fetDataTl() {
    const respons = await fetch(
      "https://v6.exchangerate-api.com/v6/939b9463f593985ae1ccf0ba/latest/TRY"
    );
    const data = await respons.json();
    setTl(data.conversion_rates.AFN);
  }

  useEffect(() => {
    fetDataDolor();
    fetDataIr();
    fetDataEuaro();
    fetDataPkr();
    fetDataTl();
  }, []);
  return (
    <div className="p-4 mt-5 w-full flex flex-col">
      <div>
        <h1 className="text-center text-3xl p-4">
          Afghani to some foriegn currncey, last update:
          {date.toString().substring(0, 17)}
        </h1>
        <div className="mt-3 p-3 grid grid-cols-1">
          <div className="border rounded-md mb-4 w-full font-bold shadow-xs p-6 justify-between text-2xl flex ">
            <span>Dolor</span>
            <span>{usd}</span>
          </div>
          <div className="border rounded-md mb-4 w-full font-bold shadow-xs p-6 justify-between text-2xl flex ">
            <span>Iranian Toman</span>
            <span>{irr * 100}</span>
          </div>
          <div className="border rounded-md mb-4 w-full font-bold shadow-xs p-6 justify-between text-2xl flex ">
            <span>Pakistan Ropia</span>
            <span>{pkr * 1000}</span>
          </div>
          <div className="border rounded-md mb-4 w-full font-bold shadow-xs p-6 justify-between text-2xl flex ">
            <span>Euaro</span>
            <span>{eur}</span>
          </div>
          <div className="border rounded-md mb-4 w-full font-bold shadow-xs p-6 justify-between text-2xl flex ">
            <span>Turkish Lira</span>
            <span>{tl}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = "939b9463f593985ae1ccf0ba";

function Exchanges() {
  const [from, setFrom] = useState("Dolor");
  const [to, setTo] = useState("AFN");
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (!from || !to) return;
      try {
        const respons = await fetch(`${URL}${API_KEY}/latest/${from}`);
        const data = await respons.json();
        const rate = data.conversion_rates[to];
        setOutput(rate * input);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [from, to, input]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border w-[60%] h-[60%] rounded-md p-4">
        <h1 className=" text-2xl font-bold py-4 text-center">
          Exchange any Currency here
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-12 gap-2">
          <div>
            <div className=" flex flex-col gap-2 items-center">
              <label htmlFor="from">from</label>
              <select
                onChange={(e) => setFrom(e.target.value)}
                value={from}
                id="from"
                className="border rounded-md focus:outline-0 w-full p-3"
              >
                <option value="USD">Dolor</option>
                <option value="AFN">Afghani</option>
                <option value="IRR">Iranian Reyal</option>
                <option value="PKR">Pakistan Ropya</option>
                <option value="EUR">Eauro</option>
                <option value="TRY">Turkish Lira</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2 items-center mt-4">
              <label htmlFor="">Enter the Amount</label>
              <input
                onChange={(e) => setInput(Number(e.target.value))}
                value={input}
                type="number"
                placeholder="Enter the Amout"
                className="border py-2 px-3 w-full rounded-md focus:outline-0"
              />
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2 items-center">
              <label htmlFor="to">To</label>
              <select
                id="to"
                onChange={(e) => setTo(e.target.value)}
                value={to}
                className="border rounded-md focus:outline-0 w-full p-3"
              >
                <option value="AFN">Afghani</option>
                <option value="USD">Dolor</option>
                <option value="IRR">Iranian Reyal</option>
                <option value="PKR">Pakistan Ropya</option>
                <option value="EUR">Eauro</option>
                <option value="TRY">Turkish Lira</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2 items-center mt-4">
              <label htmlFor="">Eqals</label>
              <input
                onChange={(e) => setOutput(Number(e.target.value))}
                value={output}
                readOnly
                type="number"
                className="border py-2 px-3 w-full rounded-md focus:outline-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Exchange() {
  return (
    <div className="mt-12">
      <AfghaniExchange />
      <Exchanges />
    </div>
  );
}
