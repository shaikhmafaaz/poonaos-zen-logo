const subjects = [
  { name: "Mathematics", grade: "A+", marks: 92 },
  { name: "Physics", grade: "A", marks: 85 },
  { name: "Chemistry", grade: "B+", marks: 78 },
  { name: "English", grade: "A", marks: 88 },
  { name: "Computer Science", grade: "A+", marks: 95 },
  { name: "Economics", grade: "A", marks: 82 },
];

const ResultsWindow = () => (
  <div className="p-4 space-y-4">
    <div className="text-center p-4 rounded-lg border border-gold/20 bg-gold/5">
      <p className="text-xs text-muted-foreground">Overall CGPA</p>
      <p className="text-3xl font-light text-gold mt-1">8.72</p>
      <p className="text-[10px] text-muted-foreground mt-1">Semester IV · 2024-25</p>
    </div>
    <div className="space-y-1.5">
      {subjects.map(({ name, grade, marks }) => (
        <div key={name} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
          <span className="text-xs text-foreground">{name}</span>
          <div className="flex items-center gap-3">
            <div className="w-24 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full rounded-full bg-gold/60" style={{ width: `${marks}%` }} />
            </div>
            <span className="text-xs text-gold w-6 text-right">{grade}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ResultsWindow;
