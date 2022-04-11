import React, { useState } from 'react'
import "./style.css"

const todo = () => {
    const [inputdata,setInputData] = useState("");
  return (
  <>
  <div className='main-div'>
      <div className='child-div'>
          <figure>
              <img src="./images/todo.png" alt="Todologo" />
              <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className='addItems'>
              <input type="text" placeholder='✍ Add Item' className='form-control'
               value={inputdata} 
              onChange={(event) =>  setInputData(event.target.value)} />
              

          </div>
          <div className='showItems'>
              <div className='eachItem'>
                  <h1>apple</h1>
                  <div className='todo-btn'>
                      <i className="fas fa-edit add-btn"></i>
                      <i className="fas fa-trash-alt add-btn"></i>
                      </div>    
              </div>

          </div>
          <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All"><span>CHECK LIST</span></button>  
          </div>
          
      </div>

  </div>
  </>
  )
    
  
}

export default todo
