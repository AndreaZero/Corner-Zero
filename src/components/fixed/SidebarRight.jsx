// components/fixed/SidebarRight.js

import { List, ListItem, ListItemText, Box } from '@mui/material';

function SidebarRight() {
  return (
    <Box height="100%" width="200px"     borderRadius='1rem'  boxShadow="0px 0px 5px 0px white">
      <List>
        <ListItem button>
          <ListItemText primary="Voce A" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Voce B" />
        </ListItem>

      </List>
    </Box>
  );
}

export default SidebarRight;
