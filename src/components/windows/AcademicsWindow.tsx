import { BookOpen, Users, Award, Clock } from "lucide-react";

const departments = [
  { name: "Arts", courses: 12, students: 850 },
  { name: "Science", courses: 15, students: 1200 },
  { name: "Commerce", courses: 10, students: 1500 },
  { name: "Computer Science", courses: 8, students: 600 },
  { name: "Management Studies", courses: 6, students: 400 },
];

const AcademicsWindow = () => (
  <div className="p-4 space-y-4">
    {/* Stats */}
    <div className="grid grid-cols-4 gap-3">
      {[
        { label: "Departments", value: "5", icon: BookOpen },
        { label: "Students", value: "4,550+", icon: Users },
        { label: "Faculty", value: "120+", icon: Award },
        { label: "Years", value: "55+", icon: Clock },
      ].map(({ label, value, icon: Icon }) => (
        <div key={label} className="p-3 rounded-lg border border-border text-center">
          <Icon className="w-4 h-4 text-gold mx-auto mb-1.5" />
          <p className="text-sm font-medium text-foreground">{value}</p>
          <p className="text-[10px] text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
    {/* Departments */}
    <div>
      <h3 className="text-xs font-medium text-foreground mb-2 px-1">Departments</h3>
      <div className="space-y-1.5">
        {departments.map(({ name, courses, students }) => (
          <div key={name} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-gold/20 cursor-pointer transition-colors">
            <span className="text-xs text-foreground">{name}</span>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <span>{courses} courses</span>
              <span>{students} students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AcademicsWindow;
