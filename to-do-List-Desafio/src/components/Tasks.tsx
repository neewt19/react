import style from './Tasks.module.css'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineCheck } from 'react-icons/ai'

export interface TasksProps {
    content: string
    id: number
    deleteTask: (Task: number, checked: boolean) => void
    countTask: () => void
    checked: boolean
}

export function Tasks({ content, id, deleteTask, countTask, checked }: TasksProps) {
    const handleDeleteTask = () => {
        deleteTask(id, checked)
    }
    const handleTaskChange = () => {
        countTask();
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.checkBox}>
                    <label >
                        <input type="checkbox" checked={checked} onChange={handleTaskChange} />
                        <span className={style.check}>
                            <AiOutlineCheck></AiOutlineCheck>
                        </span>
                        <span>{content}</span>
                    </label>
                    <button className={style.deleteTaskButton} onClick={handleDeleteTask}>
                        <RiDeleteBinLine></RiDeleteBinLine>
                    </button>
                </div>
            </div>
        </>
    )
}