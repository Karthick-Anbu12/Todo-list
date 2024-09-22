import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'



function App() {
  const [name, setname] = useState('')
  const [todos, setTodos] = useState([])
  const [desc, setdesc] = useState('')
  const [dep, setdep] = useState([])
  let title = (e) => {
    setname(e.target.value)
  }
  let descripition = (e) => {
    setdesc(e.target.value)
  }
  let submit = (e) => {
    e.preventDefault()
    if (name != '' && desc != '') {
      setTodos([...todos, name])
      setdep([...dep, desc])
      setdesc('')
      setname('')
    }
  }
  let remove=(index)=>{
    todos.splice(index,1)
    dep.splice(index,1)
    setTodos([...todos])
      setdep([...dep])
    
  }
 

  return (
    <>
      <div className='text-center mt-5'>
        <h3>My Todo</h3>
        <div className='container col-md-10 mt-4'>
          <form>
            <div class="row">
              <div class="col-lg-5">
                <input type="text" value={name} class="form-control" placeholder="Todo Name" onChange={title} />
              </div>
              <div class="col-lg-5">
                <input type="text" value={desc} class="form-control" placeholder="Todo Description" onChange={descripition} />
              </div>
              <div class="col-lg-2">
                <button onClick={submit} className='btn btn-success'>Add Todo</button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
      <List todos={todos} dep={dep} remove={remove}></List>

    </>
  )
}

export default App
