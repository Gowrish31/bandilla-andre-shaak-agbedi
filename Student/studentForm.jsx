const StudentForm = () => {
    return (
      <div>
        <h2>Add Student</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Age" />
          <input type="text" placeholder="Grade" />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  };
  
  export default StudentForm;