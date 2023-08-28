import { List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';

function SidebarLeft() {
  return (
    <Box height="100%" width="200px" borderRadius='1rem' boxShadow="0px 0px 5px 0px white">
      <List>
        <ListItem button>
          <ListItemText primary="Voce 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Voce 2" />
        </ListItem>
      </List>
    </Box>
  );
}

export default SidebarLeft;
