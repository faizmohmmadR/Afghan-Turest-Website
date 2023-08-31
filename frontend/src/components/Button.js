import { Button } from '@mui/material'
import React from 'react'

const CustomButton = (props) => {
  return (
    <Button  variant={props.variant} color={props.color}>{props.title}</Button>
  )
}

export default CustomButton