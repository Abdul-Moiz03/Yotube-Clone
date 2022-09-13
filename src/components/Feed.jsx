import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchfromAPI } from '../Utils/FetchfromAPI'

const Feed = () => {
  const [selectedCatagory, setselectedCatagory] = useState("New")
  const [videos, setvideos] = useState([])
  useEffect(() => {
    FetchfromAPI(`search?part=snippet&q=${selectedCatagory}`).then((data)=>setvideos(data.items));
  }, [selectedCatagory])

  
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #fff', px: { sx: 0, md: 2 } }}>
         <Sidebar selectedCatagory={selectedCatagory} setselectedCatagory={setselectedCatagory}/>
        <Typography className='copyright' variant="body2" sx={{ color: "#fff", mt: 0.2 }}> Practice Project</Typography>
      </Box>
      <Box sx={{ p: 2, overflowY: "auto", height: '92vh', flex: "2" }}>
        <Typography fontWeight="bold" mb={2} variant="h4" sx={{ color: "white", }}>
          {selectedCatagory}  <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos video={videos} />
      </Box>
    </Stack>
  )
}

export default Feed