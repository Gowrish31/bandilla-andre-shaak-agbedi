const TaskForm = () => {
    return (
      <div>
        <h2>Add Task</h2>
        <form>
          <input type="text" placeholder="Task Title" />
          <textarea placeholder="Task Description"></textarea>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  };
  
  export default TaskForm;
  