import  React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
 
    const [open, setOpen] = useState(false)

  return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}> 
            <ListRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=> setOpen(false)}
          >
            {/* <p>Hi...</p> */}
            <div className='drawer-div'>
                <Link to="/"> <p className="link">Home</p> </Link>
                <Link to="/dashboard"> <p className="link">Dashboard</p> </Link>
            </div>
          </Drawer>
      
    </div>
  );
}




