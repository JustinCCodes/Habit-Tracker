import { useState } from "react";

function AddHabitForm({ onAddHabit }) {
  const [habitName, sethabitName] = useState("");
  const [goal, setGoal] = useState(1);
  const [unit, setUnit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habitName || goal <= 0) {
      alert("Please enter a valid name and a goal greater than 0.");
      return;
    }

    onAddHabit({ name: habitName, goal: Number(goal), unit });

    sethabitName("");
    setGoal(1);
    setUnit("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 bg-slate-800 rounded-lg flex items-end gap-4"
    >
      <div className="flex-grow">
        <label
          htmlFor="habit-name"
          className="block text-sm font-medium text-gray-400 ml-0.5"
        >
          Habit Name
        </label>
        <input
          id="habit-name"
          type="text"
          value={habitName}
          onChange={(e) => sethabitName(e.target.value)}
          placeholder="Enter name..."
          className="w-full p-2 bg-slate-700 rounded-md mt-1"
        />
      </div>
      <div className="w-20">
        <label
          htmlFor="habit-goal"
          className="block text-sm font-medium text-gray-400 ml-0.5"
        >
          Goal
        </label>
        <input
          id="habit-goal"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 bg-slate-700 rounded-md mt-1"
        />
      </div>
      <div className="w-32">
        <label
          htmlFor="habit-unit"
          className="block text-sm font-medium text-gray-400 ml-0.5"
        >
          Unit
        </label>
        <input
          id="habit-unit"
          type="text"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="Enter unit..."
          className="w-full p-2 bg-slate-700 rounded-md mt-1"
        />
      </div>
      <button
        type="submit"
        className="px-3 py-2 bg-sky-600 hover:bg-sky-500 rounded-md font-semibold"
      >
        Add Habit
      </button>
    </form>
  );
}

export default AddHabitForm;
