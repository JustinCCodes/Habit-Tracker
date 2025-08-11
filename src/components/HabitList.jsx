import Habit from "./Habit";
import CompletedHabits from "./CompletedHabits";

// Manages and displays active and completed habits
function HabitList({ habits, onIncrement, onDecrement, onDelete }) {
  // Filters habits array to create list of active habits
  const activeHabits = habits.filter((habit) => habit.count < habit.goal);
  // Filters habits array to create list of completed habits
  const completedHabits = habits.filter((habit) => habit.count >= habit.goal);

  return (
    <div className="mt-12">
      {/* Displays the active habits heading if any active habits */}
      {activeHabits.length > 0 && (
        <h2 className="font-orbitron text-xl mb-4 text-brand-text-dim border-b-2 border-brand-surface pb-2">
          Active Habits
        </h2>
      )}

      {/* Renders list of active habits */}
      <div className="space-y-6 mt-6">
        {activeHabits.map((habit) => (
          // Renders the habit for each active one passing down props
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Display CompletedHabits if there are completed habits. */}
      {completedHabits.length > 0 && (
        <CompletedHabits
          habits={completedHabits}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default HabitList;
