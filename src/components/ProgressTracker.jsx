function ProgressTracker({ habits }) {
  if (!habits) {
    return null;
  }

  const completedHabits = habits.filter(
    (habit) => habit.count >= habit.goal
  ).length;
  const totalHabits = habits.length;

  const progressPercentage =
    totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className="mb-8 p-4 bg-brand-surface rounded-lg border border-cyan-500/20">
      <h2 className="font-orbitron text-lg font-semibold mb-2 text-white">
        Daiily Progress
      </h2>
      <p className="text-brand-text-dim mb-3">
        {completedHabits} / {totalHabits} Habits Completed
      </p>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-brand-card h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressTracker;
