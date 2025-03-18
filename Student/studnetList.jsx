import StudentItem from "./StudentItem";

const students = [
  { name: "Alice", age: 14, grade: "9th" },
  { name: "Bob", age: 15, grade: "10th" },
];

const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student, index) => (
        <StudentItem key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
