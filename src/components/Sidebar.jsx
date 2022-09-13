import React from 'react'
import {Stack} from '@mui/material'
import {categories} from '../Utils/constants'


const Sidebar = ({selectedCatagory,setselectedCatagory}) => (
    <Stack 
    direction="row" 
    sx={{ overflowY:'auto',
    height:{sx:'auto' ,md: '95%'},
    flexDirection:{md:'column'}}
   }>
    {categories.map((category)=>(
        <button onClick={()=>{setselectedCatagory(category.name)}}key={category.name}className='category-btn' style={{background: category.name === selectedCatagory && "#FC1503",color:"white"}}>
            <span style={{color: category.name === selectedCatagory ? "white" :"red",marginRight:"15px"}}>{category.icon}</span>
            <span style={{opacity: category.name === selectedCatagory ? "1" :"0.8"}}>{category.name}</span>
        </button>))}

    </Stack>
  )


export default Sidebar