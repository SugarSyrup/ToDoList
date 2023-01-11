import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, seperatedToDoSelector, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const todos = useRecoilValue(toDoSelector);
  const [todos, doings, dones] = useRecoilValue(seperatedToDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget : {value}} = event;
    setCategory(value as Categories);
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {/* {todos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)} */}
      <div>
        <div>
        {
          todos?.map((todo) => <ToDo key={todo.id} {...todo}/>)
        }
        </div>
        <div>
        {
          doings?.map((todo) => <ToDo key={todo.id} {...todo}/>)
        }
        </div>
        <div>
        {
          dones?.map((todo) => <ToDo key={todo.id} {...todo}/>)
        }
        </div>
      </div>
    </div>
  )
}

export default ToDoList;