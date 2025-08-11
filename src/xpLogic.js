export const XP_MAP = { Easy: 25, Medium: 75, Hard: 150 };

export function levelUpCheck(user) {
  if (user.currentXp < user.xpToNextLevel) {
    return user;
  }

  const excessXp = user.currentXp - user.xpToNextLevel;
  const newLevel = user.level + 1;
  const newXpToNextLevel = Math.floor(user.xpToNextLevel * 1.2);

  console.log(`LEVEL UP! You are now Level ${newLevel}!`);

  return {
    ...user,
    level: newLevel,
    currentXp: excessXp,
    xpToNextLevel: newXpToNextLevel,
  };
}
