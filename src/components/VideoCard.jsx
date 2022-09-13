import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import { demoVideoUrl } from '../Utils/constants'
import {CheckCircle} from '@mui/icons-material'
import { borderRadius } from '@mui/system'


const VideoCard = ({video: {id:{videoId}, snippet }}) => {
  return (
    <Card sx={{ width:{xs:'100%', sm:'358px', md:'320px'} , borderRadius:0 ,boxShadow:'0'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: {xs:'100%', sm:'358px', md:'320px'} ,height: 200}}>
        </CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
      <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
        {snippet?.title.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoVideoUrl}> 
      <Typography variant="subtitle2" fontWeight="bold" color="gray" >
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: "5px", color : "gray"}}></CheckCircle>
          </Typography>

        </Link>
        
      </CardContent>
</Card>
  )
}
export default VideoCard