// Styled number input with custom increment and decrement buttons
function NumberInput({ value, onChange, min = 1 }) {
  const handleValueChange = (newValue) => {
    // Check if updated value is number and not less than minimum
    const updatedValue = Math.max(min, Number(newValue) || 0);
    // Calls parent's onChange
    onChange({ target: { value: updatedValue } });
  };

  // Increments current value by 1.
  const increment = () => handleValueChange(Number(value) + 1);
  // Decrements current value by 1.
  const decrement = () => handleValueChange(Number(value) - 1);

  return (
    <div className="relative w-full mt-1">
      {/* Core HTML number input field */}
      <input
        type="number"
        min={min}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="hide-number-arrows w-full p-2 bg-slate-700 rounded-md border border-slate-600 focus:border-brand-accent focus:ring-brand-accent pr-8"
      />
      {/* Container for increment and decrement buttons */}
      <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center w-8">
        {/* Increment button using SVG for icon */}
        <button
          type="button"
          onClick={increment}
          className="h-1/2 text-brand-text-dim hover:text-brand-text-bright flex items-center justify-center"
          aria-label="Increment"
        >
          {/* SVG for up arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        {/* Decrement button using SVG for icon */}
        <button
          type="button"
          onClick={decrement}
          className="h-1/2 text-brand-text-dim hover:text-brand-text-bright flex items-center justify-center"
          aria-label="Decrement"
        >
          {/* SVG for the down arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NumberInput;
