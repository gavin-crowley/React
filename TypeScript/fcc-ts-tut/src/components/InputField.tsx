import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input onChange={(e) => setTodo(e.target.value)} value={todo} className='input__box' type="input" placeholder='Enter a task' />
            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}

export default InputField