
function List({ todos, dep, remove}) {

    
    return (<>
          <div className=' container d-flex flex-wrap mt-5'>
            {

                todos.map((todo, index) => {
                    return (
                        <div className="card m-3 bg-light" style={{ width: '22rem', height: '15rem' }}>
                            <div className="card-body ">
                                <p className="card-title">Name: {todo}</p>
                                <p className="card-text">Description: {dep[index]}</p>
                                <div className='d-flex'>
                                    <p className='me-2'>Status:</p><div className="col-xs-2">
                                        <select class="form-select" >
                                            <option value="notcompleted">Not completed</option>
                                            <option value="completed" >Completed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='position-absolute end-0 m-5 '>

                                    <button className='btn btn-danger fs-7' onClick={() => remove(index)}>Delete</button>
                                </div>
                            </div>
                        </div>)
                })}
        </div>
    </>
    )
}

export default List
