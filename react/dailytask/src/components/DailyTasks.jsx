import React from 'react'

const DailyTasks = () => {
    const task = 0;
    // const countTask = () => {
    //     return task;
    // }
    // use of if-else condition
    const countTask = () => {
        // if (task === 0) {
        //     return "No task available!!";
        // } else {
        //     return `Total tasks:  ${task}`;
        // }
       return task === 0 ? "No task available!!" : `Total tasks:  ${task}`; 
    }
    // alternatively,use of ternary operator

  return (
    <div>
          <h1>DailyTask</h1>
          {/* using variable */}
          <h2> {task}</h2>
          {/* using/calling function */}
          <h2> {countTask()}</h2>
          <button>Add Task</button>
    </div>
  )
}

export default DailyTasks
