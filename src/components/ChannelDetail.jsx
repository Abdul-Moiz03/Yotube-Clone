import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FetchfromAPI } from "../Utils/FetchfromAPI"
import {Videos, ChannelCard} from './'

const ChannelDetail = () => {
  const { id } = useParams();
 
  const [channelDetails, setchannelDetails] = useState(null)
  const [videos, setvideos] = useState([])

  useEffect(() => {
    FetchfromAPI(`channels?part="snippet&id=${id}`).then((data) => setchannelDetails(data?.items[0]));
    FetchfromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setvideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box display="flex" justifyContent="center" alignItems="center">
      <ChannelCard ChannelDetail={channelDetails} ></ChannelCard>
      </Box>
      <Box sx={{ px: 4 }}>
        <box >
        <Videos video={videos} ></Videos></box>
      </Box>
   </Box>
  )
}

export default ChannelDetail