const CalendarWindow = () => {
  const now = new Date();
  const month = now.toLocaleDateString([], { month: 'long', year: 'numeric' });
  const today = now.getDate();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  const days = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const events = [
    { day: 10, label: "Semester Exams Begin" },
    { day: 15, label: "Cultural Festival" },
    { day: 22, label: "Parent-Teacher Meet" },
    { day: 28, label: "Sports Day" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-sm font-medium text-foreground text-center">{month}</h3>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
          <span key={d} className="text-[10px] text-muted-foreground py-1">{d}</span>
        ))}
        {days.map((day, i) => (
          <div
            key={i}
            className={`text-xs py-1.5 rounded-lg transition-colors ${
              day === today
                ? "bg-gold text-primary-foreground font-medium"
                : day
                ? "text-foreground hover:bg-foreground/5 cursor-pointer"
                : ""
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-3 space-y-2">
        <h4 className="text-[11px] text-muted-foreground font-medium">Upcoming Events</h4>
        {events.map(({ day, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <span className="w-6 h-6 rounded bg-gold/10 text-gold flex items-center justify-center text-[10px]">{day}</span>
            <span className="text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWindow;
