import React, { useState, useEffect } from 'react';
import './todo.css';

const getItems = () =>{
  let lists = localStorage.getItem('list');
  console.log(lists);
   if(lists){
    return JSON.parse(lists);
   } else{
    return [];
   }
}

const Todo = () => {
  const [items, setItems] = useState();
  const [show, setShow] = useState(getItems());

  const addItems = () => {
    if (items !== '') {
      setShow([...show, items]);
      setItems('');

    }
  }

  const enterButtonClicked = (e) => {
    if (e.keyCode === 13) {
      if (items !== '') {
        setShow([...show, items]);
        setItems('');
      }
    }
  }

    const deleteItems = (id) => {
      const update = show.filter((elem, index) => {
        return index !== id;
      })
      setShow(update);
    }

    useEffect(() => {
      localStorage.setItem('list',JSON.stringify(show))
    }, [show]);
    


    return (<>
      <div className='main-div'>
        <div className='child-div'>
          <h1>Todo List</h1>
          <div className='add-item'>
            <input 
              type="text"
              placeholder='Add Your Items...'
              value={items}
              onChange={(e) => { setItems(e.target.value) }}
              onKeyDown={enterButtonClicked}
            />
            <i className="fa fa-solid fa-plus" title='Add Items' onClick={addItems}></i>
          </div> <hr />
          {
            show.map((elem, index) => {
              return (
                <div className='content' key={index}>
                  <div className="show-item" >
                    <h3>{elem}</h3>
                  </div>
                  <div><i className="fa-solid fa-trash-can fa-lg del" title='Remove Item ' onClick={() => deleteItems(index)}></i></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
    )
  }

  export default Todo;