import { Stack ,Box } from "@mui/material"
import  VideoCard  from './VideoCard'
import  ChannelCard  from './ChannelCard'

const Videos = ({ video, direction }) => {
  if (!video.length) return 'Loding...';
  return (
    <Stack display="flex" direction={direction || "row"} gap={2} justifyContent="start" flexWrap='wrap' sx={{px: 4}}>
      
      {video.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard ChannelDetail={item} />}

          </Box>
        ))}
     
    </Stack>
  )
}

export default Videos