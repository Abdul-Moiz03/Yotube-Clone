import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { FetchfromAPI } from '../Utils/FetchfromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm}=useParams()

  useEffect(() => {
    FetchfromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setvideos(data.items));
  }, [searchTerm])

  
  return (
    <Box sx={{ p: 2, overflowY: "auto", height: '92vh', flex: "2" }}>
    <Typography fontWeight="bold" mb={2} variant="h4" sx={{ color: "white", }}>
      Search Result for :<span style={{ color: "#F31503" }}> {searchTerm}</span> Videos
    </Typography>
    <Videos video={videos} />
  </Box>
  )
}

export default SearchFeed