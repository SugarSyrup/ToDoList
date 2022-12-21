import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget : {name}} = event;
    
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //@TODO: cataegory 타입 중복 ( 따로 분리하기 ) 
      const newToDo = { text, id, category:name as "TO_DO" | "DOING" | "DONE"};
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)];
    });
  }

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" &&<button name="DOING" onClick={onClick}>Doing</button>}
      {category !== "TO_DO" &&<button name="TO_DO" onClick={onClick}>TO DO</button>}
      {category !== "DONE" &&<button name="DONE" onClick={onClick}>Done</button>}
    </li>
  );
}

export default ToDo;