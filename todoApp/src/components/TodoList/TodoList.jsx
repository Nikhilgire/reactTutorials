import Todo from "./Todo/Todo"

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div className="todo-container">
            {
                (todos.length === 0) ? <h2>No todo to show...</h2> : "" 
            }
            {
                todos.map(({id, title, isComplete}, index) => <Todo key={index} title={title} isComplete={isComplete} deleteTodo={() => deleteTodo(id)} />)
            }
        </div>
    )
}

export default TodoList;