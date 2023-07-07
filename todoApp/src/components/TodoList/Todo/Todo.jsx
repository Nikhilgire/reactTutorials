import "./Todo.css";

const Todo = () => {
    return (
        <div className="todo-item">
            <h4>Go To GYM</h4>

            <div className="action-holder">
                <input type="checkbox"/>

                <button>Delete</button>

            </div>
        </div>
    )
}

export default Todo;