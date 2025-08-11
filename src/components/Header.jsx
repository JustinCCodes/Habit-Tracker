function Header({ user }) {
  const safeUser = user || { level: 1, currentXp: 0, xpToNextLevelXP: 250 };

  return (
    <header className="bg-brand-surface animated-border-b mb-8 sticky top-0 z-10">
      <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-orbitron text-brand-text-bright">
          Dev Habit Tracker
        </h1>
        <div className="text-right">
          <p className="font-orbitron">Lvl {user.level}</p>
          <p className="text-xs text-brand-accent">
            {user.currentXp} / {user.xpToNextLevelXP}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
