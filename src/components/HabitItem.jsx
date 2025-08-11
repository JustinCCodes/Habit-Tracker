function HabitItem({ habit, onIncrement, onDecrement, onDelete }) {
  const isCompleted = habit.count >= habit.goal;

  const completedStyles = isCompleted
    ? "bg-emerald-900 opacity-75"
    : "bg-slate-800";
  const buttonHoverStyles = "hover:bg-slate-600";
  const incrementButtonHoverStyles = "hover:bg-sky-500";

  return (
    <div
      className={`p-4 rounded-lg flex items-center justify-between transition-all duration-300 ${completedStyles}`}
    >
      <div>
        <h3
          className={`text-lg font-semibold ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {habit.name}
        </h3>
        <p className="text-sky-400 text-sm">
          {habit.count} / {habit.goal} {habit.unit}
        </p>
      </div>

      <div className="flex itemms-center gap-3">
        <button
          onClick={() => onDelete(habit.id)}
          className="text-gray-500 hover:text-red-500 text-lg"
          aria-label="Delete habit"
        >
          &times;
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onDecrement(habit.id)}
          className={`w-8 h-8 bg-slate-700 rounded-full text-xl font-bold ${buttonHoverStyles} disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={habit.count === 0}
        >
          -
        </button>

        <button
          onClick={() => onIncrement(habit.id)}
          className={`w-8 h-8 bg-sky-600 rounded-full text-xl font-bold ${incrementButtonHoverStyles} disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={isCompleted}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default HabitItem;
