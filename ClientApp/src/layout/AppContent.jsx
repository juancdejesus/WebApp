import { Breadcrumbs, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {Outlet, Link, useLocation} from 'react-router-dom';

const AppContent = () => {
    const  location = useLocation();
    console.log(location.pathname);

    let currentLink = ''

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <Typography  variant="h4" to={currentLink} key={crumb} color="text.primary">{crumb}</Typography>

            )
        });


    return (
            <Box
                component="main"
                sx={{
                flexGrow: 1,
                marginLeft : 3
            }}>
                <Toolbar/>


                <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 1}}>
                    {crumbs}
                </Breadcrumbs>
                <hr/>
                <div sx={{ backgroundColor: "red"}}>
                    <Outlet/>
                </div>
                
            </Box>
    );
}

export default AppContent;