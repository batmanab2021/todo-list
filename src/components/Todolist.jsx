
import {useState} from "react"
const Todolist= () => {

const [list,setList] = useState([])
const [input,setInput] = useState("")

const onSubmit = () => {
    const newItem = [...list]
    newItem.push(input)
    setList(newItem)
    setInput("")
    
}

return (
   
   
    <div>
        <h1>My Todo list</h1>
    
        
            <input type="text" value={input} id="inputBox" onChange={(e)=>(e.target.value)}/>
            <button onClick={onSubmit}>Add to list </button>
        <h2>{list}</h2>
        </div>
)
}

export default Todolist