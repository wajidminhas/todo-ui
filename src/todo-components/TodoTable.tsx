
import React from 'react'
import { TableData } from './TableData'

export interface Todo {
    id: number,
    title: string,
    is_completed : boolean
}

const TodoTable = () => {

    const todo_list : Todo[] = [
        {id: 1, title: "task one", is_completed: false},
        {id: 2, title: "task two", is_completed: false },
        {id: 3, title: "task three", is_completed: false },


    ]

  return (
    <section>
        <table className='w-full'>
            {/* this is heading of table  */}
            <thead>
                <tr className='flex items-center justify-between capitalize px-2 py-1 bg-gray-100 shadow-md'>
                    <th>task</th>
                    <th>action</th>
                </tr>
            </thead>

            {/* THIS IS THE BODY OF TABLE  */}
            <tbody>
                {
                todo_list.map((task : Todo) => (
                    <TableData key={task.id} task={task} />
                ))
                }
                
            </tbody>
        </table>
    </section>
  )
}

export default TodoTable