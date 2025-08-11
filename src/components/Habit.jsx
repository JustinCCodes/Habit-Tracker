import HabitItem from "./HabitItem";
import DeleteButton from "./DeleteButton";

// Pass data and functions to children

function Habit({ habit, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-grow">
        <HabitItem
          habit={habit}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      <DeleteButton onClick={() => onDelete(habit.id)} />
    </div>
  );
}

export default Habit;
