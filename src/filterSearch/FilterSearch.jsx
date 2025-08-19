import React from 'react'

const FilterSearch = () => {
    var list=['apple', 'banana', 'orange', 'grape', 'kiwi'];
    const [query, setQuery] = React.useState('');
    const filtered=list.filter(item=>item.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  return (
    <div>
        <input type="text" placeholder='search' value={query} onChange={(e)=>setQuery(e.target.value)} />
      <ul>
        {filtered.map((item,index)=>(
<li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilterSearch
