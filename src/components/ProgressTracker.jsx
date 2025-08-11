// Tracks and displays user's daily progress as percentage bar
function ProgressTracker({ habits }) {
  // If no habits doesn't render anything
  if (!habits) {
    return null;
  }

  // Filters habits list to find how many have reached goal
  const completedHabits = habits.filter(
    (habit) => habit.count >= habit.goal
  ).length;
  // Total number of habits
  const totalHabits = habits.length;

  // Calculates the progress percentage prevents division by zero if no habits.
  const progressPercentage =
    totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className="mb-8 p-4 bg-brand-surface rounded-lg border border-cyan-500/20">
      <h2 className="font-orbitron text-lg font-semibold mb-2 text-brand-text-bright">
        Daily Progress
      </h2>
      {/* Displays count of completed habits out of total */}
      <p className="text-brand-text-dim mb-3">
        {completedHabits} / {totalHabits} Habits Completed
      </p>
      {/* Background of progress bar */}
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        {/* Progress bar width set dynamically by calculating percentage */}
        <div
          className="bg-brand-card h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressTracker;
