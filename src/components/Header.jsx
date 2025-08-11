function Header({ user }) {
  const safeUser = {
    level: 1,
    currentXp: 0,
    xpToNextLevel: 250,
    ...user,
  };

  return (
    <header className="bg-brand-surface animated-border-b mb-8 sticky top-0 z-10">
      <div className="max-w mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-orbitron text-brand-text-bright">
          Dev Habit Tracker
        </h1>
        <div className="text-right font-fira-code">
          <p className="font-orbitron text-brand-text-bright">
            Lvl {safeUser.level}
          </p>
          <p className="text-xs text-brand-accent">
            {safeUser.currentXp} / {safeUser.xpToNextLevel}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
