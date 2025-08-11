import HabitItem from "./HabitItem";

function HabitList({ habits, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default HabitList;
