import { useState } from 'react';

const Todolist = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    return (
        <div>
            <h1>My Todo list</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('testing');
                    setList([...list, input]);
                    setInput('');
                }}>
                <input
                    value={input}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Add to list </button>
                <ul>
                    {list.map((e) => (
                        <li>
                            <h2>{e}</h2>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};

export default Todolist;