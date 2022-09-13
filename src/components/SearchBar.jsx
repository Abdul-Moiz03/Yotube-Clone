import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton  } from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [Seacrhterm, setSeacrhterm] = useState('')
  const navigate=useNavigate()
  const handler = (e) => {
    e.preventDefault();
    if (Seacrhterm) {
      navigate(`/search/${Seacrhterm}`)
      setSeacrhterm('')
  }
  
  }
  return (
    <Paper
    component='form'
    onSubmit={handler}
    sx={{borderRadius: 20, border:'1px solid #e3e3e3',pl: 1, boxShadow:'none' ,mr :{sm:5}}}

    >
<input className='search-bar' onChange={(e)=>{setSeacrhterm(e.target.value)}} placeholder="Search" value={Seacrhterm}></input>
<IconButton type='submint' sx={{p:'10px', color:'red'}} ><Search/></IconButton>

    </Paper>
  )
}

export default SearchBar