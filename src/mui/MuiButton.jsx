import { Button, Fab, IconButton } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { LoadingButton } from '@mui/lab';
export const MuiButton = () => {
    const [isLoading, setisLoading] = useState(true)
  return (
    <div>
        <Button variant='text' color='primary' size='small'>mybtn</Button>
        <Button variant='outlined' color='secondary' size='medium'>mybtn</Button>
        <Button variant='contained' color='error' size='large'>mybtn</Button>
        <Button variant='contained' sx={{color:"pink",backgroundColor:"black"}}>hello</Button>
        <Button variant='contained' startIcon={<DeleteIcon/>}>DELETE</Button>
        <Button variant='contained' endIcon={<DeleteIcon/>}>DELETE</Button>
        <IconButton onClick={()=>{alert("clicked....")}}>
            <DeleteIcon/>
        </IconButton>
        <Fab color='primary'>
            <FingerprintIcon/>
        </Fab>
        {
            setTimeout(()=>{
                setisLoading(false)
            },3000)
        }
        <LoadingButton loading={isLoading} variant='contained' color='success'>loading</LoadingButton>
    </div>
  )
}
