import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencychange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  holder="enter"
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-5 rounded-lg  flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/70 mb-5 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder={holder}
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/100 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-red-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencychange && onCurrencychange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
