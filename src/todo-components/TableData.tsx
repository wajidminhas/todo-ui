
import {Todo} from "@/todo-components/TodoTable"
import { CiSquareCheck } from "react-icons/ci"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import React from 'react'
import  ToolTip  from "./ToolTip"

export const TableData = ({task}:{task:Todo}) => {
  return (
    <section>
        <tr className="flex items-center justify-between px-2 py-1">
            <td>{task.title}</td>
            <td className="flex gap-2">
                <ToolTip tool_tip_content="Mark as Completed">
                  <CiSquareCheck size={24} className={`${task.is_completed ? "text-green-500" : "text-gray-300"  } , "cursor-pointer"`} />
                  </ToolTip>
                  <FiEdit size={24} className="text-blue-500 cursor-pointer" />
                  <FiTrash2 size={24} className="text-red-700 cursor-pointer" />
            </td>
        </tr>
    </section>
  )
}
