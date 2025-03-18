const StudentItem = ({ student }) => {
    return (
      <div>
        <h3>{student.name}</h3>
        <p>Age: {student.age}</p>
        <p>Grade: {student.grade}</p>
      </div>
    );
  };
  
  export default StudentItem;
  