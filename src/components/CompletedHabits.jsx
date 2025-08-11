import Habit from "./Habit";

// Displays a list of habits that have been completed and date of last completion.
function CompletedHabits({ habits, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="mt-12">
      {/* Title for completed habits*/}
      <h2 className="font-orbitron text-xl mb-4 text-brand-text-dim border-b-2 border-brand-surface pb-2">
        Completed on:
      </h2>
      <div className="space-y-6 mt-6">
        {/* Iterate through array to render habit component for each */}
        {habits.map((habit) => (
          <div key={habit.id}>
            {/* Render individual habit pass habit data and callback functions (onIncrement, onDecrement, onDelete) as props. */}
            <Habit
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
            {/* Display date when habit was completed */}
            <p className="text-xs text-brand-text-dim text-right mt-1 pr-12">
              Completed on:{" "}
              {/* Access last item in 'completedOn' array then format into readable string */}
              {new Date(
                habit.completedOn[habit.completedOn.length - 1]
              ).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedHabits;
