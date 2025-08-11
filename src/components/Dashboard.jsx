import { useState, useEffect } from "react";
import { initialHabits } from "../data.js";
import HabitList from "./HabitList";
import AddHabitForm from "./AddHabitForm";
import ProgressTracker from "./ProgressTracker";
import { wasCompletedToday } from "../utils.js";

const XP_MAP = { Easy: 25, Medium: 75, Hard: 150 };

function levelUpCheck(user) {
  if (user.currentXp < user.xpToNextLevel) return user;
  const excessXp = user.currentXp - user.xpToNextLevel;
  const newLevel = user.level + 1;
  const newXpToNextLevel = Math.floor(user.xpToNextLevel * 1.2);
  console.log(`🎉 LEVEL UP! You are now Level ${newLevel}!`);
  return {
    ...user,
    level: newLevel,
    currentXp: excessXp,
    xpToNextLevel: newXpToNextLevel,
  };
}

function Dashboard({ user, setUser }) {
  const [habits, setHabits] = useState(
    () => JSON.parse(localStorage.getItem("habits_data_v2")) || initialHabits
  );

  useEffect(() => {
    localStorage.setItem("habits_data_v2", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (newHabitData) => {
    const newHabit = {
      ...newHabitData,
      id: Date.now(),
      count: 0,
      completedOn: [],
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (habitId) =>
    setHabits(habits.filter((h) => h.id !== habitId));

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

  const handleIncrement = (habitId) => {
    let userHasChanged = false;
    let updatedUser = { ...user };

    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId && habit.count < habit.goal) {
        const newCount = habit.count + 1;
        const wasJustCompleted = newCount >= habit.goal;

        if (
          wasJustCompleted &&
          !wasCompletedToday(habit.completedOn[habit.completedOn.length - 1])
        ) {
          userHasChanged = true;
          updatedUser.currentXp += XP_MAP[habit.difficulty] || 0;
          const today = new Date().toDateString();
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

    if (userHasChanged) {
      updatedUser = levelUpCheck(updatedUser);
      setUser(updatedUser);
    }
    setHabits(updatedHabits);
  };

  return (
    <main className="max-w-3xl mx-auto px-4">
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
