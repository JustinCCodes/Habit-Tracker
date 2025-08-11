import { calculateStreak } from "../streakLogic";

// Displays a single habit its progress and increment/decrement buttons
function HabitItem({ habit, onIncrement, onDecrement }) {
  // Checks if habit is completed
  const isCompleted = habit.count >= habit.goal;
  // Calculates streak from completed dates
  const streak = calculateStreak(habit.completedOn);

  // Apply different styles if habit is completed
  const cardStyles = isCompleted
    ? "bg-brand-card/50 opacity-60"
    : "bg-brand-card";

  return (
    <div
      className={`p-6 rounded-lg flex items-center justify-between transition-all duration-300 border border-cyan-500/20 ${cardStyles}`}
    >
      <div>
        <h3
          className={`font-orbitron text-lg ${
            isCompleted ? "text-brand-text-dim" : "text-brand-text-bright"
          }`}
        >
          {habit.name}
        </h3>
        {/* Displays progress towards goal */}
        <p className="text-brand-accent text-sm">
          {habit.count} / {habit.goal} {habit.unit}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Displays the streak with different styling for active streaks */}
        <span
          className={`font-fira-code font-bold text-base ${
            streak > 0 ? "text-amber-400" : "text-brand-text-dim"
          }`}
        >
          🔥 {streak}
        </span>
        {/* Decrement button disabled when count is 0 or goal is reached */}
        <button
          onClick={() => onDecrement(habit.id)}
          className="w-8 h-8 bg-slate-700 rounded-full text-xl font-bold hover:bg-slate-600 disabled:opacity-50"
          disabled={habit.count === 0 || isCompleted} // Disable decrement when completed
        >
          -
        </button>
        {/* Increment button disabled when goal is reached */}
        <button
          onClick={() => onIncrement(habit.id)}
          className="w-8 h-8 bg-brand-accent rounded-full text-xl font-bold hover:opacity-80 disabled:opacity-50"
          disabled={isCompleted}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default HabitItem;
