import { Box,Stack,Typography } from "@mui/material"
import { useState, useEffect } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { FetchfromAPI } from "../Utils/FetchfromAPI"
import {Videos} from './'

const VideoDetail = () => {
  const { id } = useParams();
  const [Video, setVideo] = useState([])
  const [VideoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    FetchfromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => { setVideoDetails(data?.items[0]) })
    FetchfromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => { setVideo(data?.items) })
    
  }, [id])
  if (!VideoDetails.snippet) return 'Loding...';
const{snippet:{title,channelId,channelTitle}, statistics:{viewCount,likeCount}}=VideoDetails
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} >
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="#fff" variant={{sm:"subtitle" ,md: "h6"}}>
                  {channelTitle}
                </Typography>
              </Link><Stack direction='row' gap="20px">
                <Typography color="#fff" variant="body1" sx={{ opacity: "0.5" }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography color="#fff" variant="body1" sx={{ opacity: "0.5" }}>
                {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} alignItems="center" justifyContent='center'>
        <Videos video={Video} direction="column" ></Videos>
            </Box>
      </Stack>
    
    </Box>
  )
}

export default VideoDetail