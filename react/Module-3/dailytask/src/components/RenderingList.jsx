function RenderingList() {
    const tasks=["Task1","Task2","Task3","Task4"]
    return (<>
        <ul>
            {tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
    </>)
}
export default RenderingList;