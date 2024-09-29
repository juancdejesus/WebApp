import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UserList() {

    const users = useLoaderData();

    const columns = [
        // { field: 'id', headerName: 'ID', width: 50 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'active', headerName: 'Active', width: 150 },


    ]

    

    return ( 
        <>
            {/* <Typography variant="h4" sx={{ marginTop: 1, marginBottom:1}}>
                Users
            </Typography> */}

            <Box component={Paper} 
             sx={{ height: 650, width: 900}} >
                <DataGrid 
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 10,
                        },
                    },
                }}
                
                sx={{ marginBottom: 5}}
                >

                </DataGrid>
            </Box>

        </>
     );
}
 

export const userListLoader = async () => {
    
    try {
        const response = await axios.get("/api/users");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data. '  + error);
    }
}