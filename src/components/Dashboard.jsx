import { useState, useEffect } from "react";
import HabitList from "./HabitList";
import AddHabitForm from "./AddHabitForm";
import ProgressTracker from "./ProgressTracker";
import { levelUpCheck, XP_MAP } from "../xpLogic.js";

function Dashboard({ user, setUser }) {
  // Initialize habits from localStorage or empty array
  const [habits, setHabits] = useState(
    () => JSON.parse(localStorage.getItem("habits_data_v2")) || []
  );

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem("habits_data_v2", JSON.stringify(habits));
  }, [habits]);

  // Adds new habit to list
  const addHabit = (newHabitData) => {
    const newHabit = {
      ...newHabitData,
      id: Date.now(),
      count: 0,
      completedOn: [],
    };
    setHabits([...habits, newHabit]);
  };

  // Deletes habit from list
  const deleteHabit = (habitId) =>
    setHabits(habits.filter((h) => h.id !== habitId));

  // Decrements habit count
  const handleDecrement = (habitId) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId && habit.count > 0) {
          return { ...habit, count: habit.count - 1 };
        }
        return habit;
      })
    );
  };

  // Increments habit count
  const handleIncrement = (habitId) => {
    const today = new Date().toDateString();
    let habitJustCompleted = null;

    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId && habit.count < habit.goal) {
        const newCount = habit.count + 1;
        // Check if habit is being completed and for the first time today
        if (newCount >= habit.goal && !habit.completedOn.includes(today)) {
          habitJustCompleted = habit;
          return {
            ...habit,
            count: newCount,
            completedOn: [...habit.completedOn, today],
          };
        }
        return { ...habit, count: newCount };
      }
      return habit;
    });

    setHabits(updatedHabits);

    // If a habit was completed award XP and check for a level up
    if (habitJustCompleted) {
      let updatedUser = {
        ...user,
        currentXp:
          user.currentXp + (XP_MAP[habitJustCompleted.difficulty] || 0),
      };
      updatedUser = levelUpCheck(updatedUser);
      setUser(updatedUser);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6">
      <ProgressTracker habits={habits} />
      <AddHabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={deleteHabit}
      />
    </main>
  );
}

export default Dashboard;
