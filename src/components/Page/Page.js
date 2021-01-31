import React, {useRef} from 'react'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'

const Page = ({ title, children }) => {
  const pageRef = useRef();

  return (
    <>
      <div ref={pageRef}>
        { title && <Typography component="h2" variant="h2">{title}</Typography> }          
        {children}
      </div>
    </>
  )
}

export default Page
