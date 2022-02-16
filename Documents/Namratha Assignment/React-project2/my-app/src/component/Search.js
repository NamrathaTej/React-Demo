import React from 'react'

export default function Search({value, handleChange}) {
  return (<input type="text" value={value} onChange={handleChange}></input>
    
  )
}
