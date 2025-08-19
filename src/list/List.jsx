import React from 'react'

const List = () => {
    let arr=["a","b","c","d"];
  return (
    <div>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>))}
      </ul>
    </div>
  )
}

export default List
