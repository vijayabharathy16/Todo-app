import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import { useEffect, useState } from 'react';

function App() {
  const [allList, setAllList] = useState([{ task: "Create theme", completed: false }, { task: "Work on wordpress", completed: false }, { task: "Organize office main department", completed: false }, { task: "Error solve in HTML template", completed: false }]);
  console.log(allList);

  const [inputText, setinputText] = useState("");
  const [list, setList] = useState([...allList]);
  console.log(list);
  useEffect(() => {

    setList([...allList]);
  }, [allList])


  const handleChange = (e) => {
    setinputText(e.target.value);
  }

  const handleSubmit = (e) => {

    setAllList([...allList, { task: inputText, completed: false }]);
    // setList([...list,{ task: inputText, completed: false }])

    e.preventDefault();

  }

  let checking = (value) => {
    let index = allList.findIndex((item) => item.task == value.task);
    if (value.completed === false) {
      allList[index].completed = true;
      setList([...allList]);
    }
    else {
      allList[index].completed = false;
      setList([...allList]);
    }
  }

  let all = () => {
    setList([...allList]);
  }

  let active = (e) => {
    e.preventDefault();
    let actList = allList.filter((item => item.completed == false));
    setList([...actList]);
    console.log(actList);
  }

  let complete = () => {
    let completed = allList.filter((item) => item.completed == true);
    console.log(completed);
    setList([...completed])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">

              <form onSubmit={handleSubmit}>
                <input type="text" className="form-control add-task" placeholder="New Task..." onChange={handleChange} />
                <button type="submit" className="btn btn-success mt-3">Add</button>
              </form>


              <ul className="nav nav-pills todo-nav">
                <li role="presentation" className="nav-item all-task active" ><a href="#" className="nav-link" onClick={all}>All</a></li>
                <li role="presentation" className="nav-item active-task" ><a href="" className="nav-link" onClick={active}>Active</a></li>
                <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link" onClick={complete}>Completed</a></li>

              </ul>

              <div className="todo-list">

                {
                  list.map((item) => {
                    return <div key={item}>
                      <Task taskItem={item} check={checking}></Task>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
