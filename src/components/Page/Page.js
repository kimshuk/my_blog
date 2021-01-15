import React, {useRef} from 'react'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'

const Page = ({ title, children }) => {
  const pageRef = useRef();

  return (
    <Box>
      <div ref={pageRef}>
        <div>
          { title && <Typography component="h1" variant="h2">{title}</Typography> }          
        </div>
        <div>
          {children}
        </div>
      </div>
    </Box>
  )
}

export default Page
