import React from "react";
import Image from "next/image";
import { Typography, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const myLoader = ({ src, width, quality }) => {
  return `https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/filter_filters_funnel_list_navigation_sort_sorting_icon_123212.png?alt=media&token=49bab88f-8a2a-4e1c-8608-a26ad07a4677
      quality || 100
    }`;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



// const DialogTitleProps =()=> {
//   id: string;
//   children: React.ReactNode;
//   onClose: () => void
// }

// const BootstrapDialogTitle = (props: DialogTitleProps) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };


const FilterHome = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div
        // onClick={}
        style={{
          float: "right",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
        >
        <Image
          loader={myLoader}
          src={
            "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Ffilter.png?alt=media&token=f3f54bce-a908-48c1-b67a-1dae74b5c0d0"
          }
          alt="filter"
          // layout='fill' 
          width="30px"
          height="30px"
          onClick={handleClickOpen}
        />

        <div style={{ display: "inline" }}>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 25,},
              fontWeight: "bold",
              display: "inline-block",
              fontFamily:"Work Sans",
              marginLeft:"5px",
            }}
          >
            Filter
          </Typography>
        </div>
      </div>
      

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <DialogTitle sx={{ m: 0, p: 2 }}>
      Place Filter
    </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
     
    </>
  );
};

export default FilterHome;
