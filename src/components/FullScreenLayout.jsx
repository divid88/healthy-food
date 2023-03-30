import { Box } from "@mui/material"

const FullScreenLayout = ({children}) => {
  return (
    <Box sx={{height:'70vh'}}>
            {children}
    </Box>
  )
}

export default FullScreenLayout
