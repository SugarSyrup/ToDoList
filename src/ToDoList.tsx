import React, { useState } from "react";

import {useForm} from 'react-hook-form';

function ToDoList() {
    const { register,  handleSubmit, formState } = useForm();
    const onValid = ( data: any ) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", {required:true, minLength:10})}placeholder="Write a To Do" ></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;