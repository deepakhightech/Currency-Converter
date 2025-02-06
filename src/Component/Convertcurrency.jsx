import Inputbox from "./Inputbox";
import { useState } from "react";
import useCurrencyinfo from "./Usecurrencyinfo";

function Convertcurrency() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertAmount(amount);
  };

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1401683819/photo/finance.jpg?s=612x612&w=0&k=20&c=bDGwLbK4CMddttO1noDJJaiTpLTAf-wwKbk_epMloY8=')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* From Inputbox */}
              <div className="w-full mb-1">
                <Inputbox
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencychange={(currency) => setFrom(currency)} // Corrected to update `from` state
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}
                  
                />
              </div>

              {/* Swap Button */}
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Reverse
                </button>
              </div>

              {/* To Inputbox */}
              <div className="w-full mt-1 mb-4">
                <Inputbox
                  label="To"
                  amount={convertAmount}
                  currencyOption={options}
                  onCurrencychange={(currency) => setTo(currency)} // Corrected to update `to` state
                  selectCurrency={to} // Corrected to `to`
                  amountDisable
                />
              </div>

              {/* Convert Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Convertcurrency;
