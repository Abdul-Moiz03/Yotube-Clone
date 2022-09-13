import {Box,CardContent ,CardMedia,Typography} from "@mui/material"
import { color, display } from "@mui/system"
import { Link } from "react-router-dom"
import { demoProfilePicture } from '../Utils/constants'
import {CheckCircle} from '@mui/icons-material'

const ChannelCard = ({ChannelDetail}) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" ,width:{md:'320px',xs:'100%'},height:"350px",display: "flex", justifyContent: "center",alignItems: 'center'}}>
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
        <CardContent sx= {{display: "flex", flexDirection: "column", color: "#fff", justifyContent: "center", textAlign:
              'center'}}>
        <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url} sx={{
          height: '180px',
          width: '180px',
            borderRadius: '50%',
            mb: "2px",
            borderColor: "e3e3e3"
          }} > </CardMedia>
          <Typography variant="h6"sx={{ pt: "14px"}}>
            {ChannelDetail?.snippet?.title}
            <CheckCircle sx={{color : "gray", fontSize: 16, ml: "5px",  }}></CheckCircle>
          </Typography>

        </CardContent >
        </Link>
    </Box>
  )
}

export default ChannelCard