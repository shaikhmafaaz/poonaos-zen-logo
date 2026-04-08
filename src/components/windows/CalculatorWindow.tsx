import { useState } from "react";

const buttons = [
  ["C", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const CalculatorWindow = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (val: string) => {
    if (val === "C") setDisplay("0");
    else if (display === "0" && val !== ".") setDisplay(val);
    else setDisplay(display + val);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 text-right">
        <p className="text-2xl font-light text-foreground tracking-wider">{display}</p>
      </div>
      <div className="flex-1 grid grid-rows-5 gap-px bg-border/30 p-px">
        {buttons.map((row, ri) => (
          <div key={ri} className="grid gap-px" style={{ gridTemplateColumns: ri === 4 ? '2fr 1fr 1fr' : 'repeat(4, 1fr)' }}>
            {row.map(btn => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className={`flex items-center justify-center text-sm transition-colors ${
                  ["÷", "×", "−", "+", "="].includes(btn)
                    ? "bg-gold/20 text-gold hover:bg-gold/30"
                    : ["C", "±", "%"].includes(btn)
                    ? "bg-secondary text-foreground hover:bg-secondary/80"
                    : "bg-card text-foreground hover:bg-foreground/5"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorWindow;
