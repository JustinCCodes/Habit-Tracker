import { useState } from "react";
import NumberInput from "./NumberInput";

function AddHabitForm({ onAddHabit }) {
  // initialize states
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(1);
  const [unit, setUnit] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");

  const handleSubmit = (e) => {
    // prevents Browser from reloading page on submit
    e.preventDefault();
    // checks if input is valid
    if (!name || goal <= 0) {
      alert("Please enter a valid name and a goal greater than 0.");
      return;
    }
    onAddHabit({ name, goal: Number(goal), unit, difficulty });
    // reset to standard
    setName("");
    setGoal(1);
    setUnit("");
    setDifficulty("Medium");
  };

  return (
    <div className="mb-8 p-4 bg-brand-surface rounded-lg border border-cyan-500/20 max-w-4xl mx-auto">
      <h2 className="font-orbitron text-base font-semibold mb-2 text-brand-text-bright">
        Add New Habit
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-end gap-4"
      >
        <div className="w-full md:w-72">
          <label
            htmlFor="habit-name"
            className="block text-sm font-medium text-brand-text-dim"
          >
            Name
          </label>
          <input
            id="habit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter here..."
            autoComplete="off"
            className="w-full mt-1 p-2 bg-slate-700 rounded-md border border-slate-600 focus:border-brand-accent focus:ring-brand-accent"
          />
        </div>
        <div className="w-full md:w-32">
          <label
            htmlFor="habit-goal"
            className="block text-sm font-medium text-brand-text-dim"
          >
            Goal
          </label>
          <NumberInput value={goal} onChange={(e) => setGoal(e.target.value)} />
        </div>
        <div className="w-full md:w-40">
          <label
            htmlFor="habit-unit"
            className="block text-sm font-medium text-brand-text-dim"
          >
            Unit
          </label>
          <input
            id="habit-unit"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Enter here..."
            autoComplete="off"
            className="w-full mt-1 p-2 bg-slate-700 rounded-md border border-slate-600 focus:border-brand-accent focus:ring-brand-accent"
          />
        </div>
        <div className="w-full md:w-40">
          <label
            htmlFor="habit-difficulty"
            className="block text-sm font-medium text-brand-text-dim"
          >
            Difficulty
          </label>
          <select
            id="habit-difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full mt-1 p-2 bg-slate-700 rounded-md border border-slate-600 focus:border-brand-accent focus:ring-brand-accent"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex-grow md:w-auto px-4 py-2 bg-brand-accent hover:opacity-80 rounded-md font-semibold text-slate-900"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddHabitForm;
