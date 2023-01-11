import { useRecoilState, useRecoilValue } from "recoil";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Categories, categoryState, seperatedToDoSelector } from "../atoms";
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
  const onDragEnd = () => {

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
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="first">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
              {
                todos?.map((todo) => {
                  return (
                    <Draggable key={todo.id} draggableId={JSON.stringify(todo.id)} index={parseInt(todo.text)}>
                      {(provided) => (<li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><ToDo key={todo.id} {...todo}/></li>)}
                    </Draggable>
                  )
                })
              }
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )
}

export default ToDoList;