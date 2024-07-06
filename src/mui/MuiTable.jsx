import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const MuiTable = () => {

    const columns =[
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110
        },
        
    ]
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 }
    ]

  return (
    <div>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            ></DataGrid>
        </Box>
    </div>
  )
}
