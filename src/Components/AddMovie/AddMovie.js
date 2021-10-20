import * as React from 'react';
import Box  from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({addMovie}) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)
  const [image, setImage] = useState("")
  const [type, setType] = useState("")
  const [date, setDate] = useState("")



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}> Add movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
   <Box sx={style}>     
<form action="/action_page.php">

  <label for="name"> name:</label><br/>
  <input type="text" onChange={(e)=>setName(e.target.value)}/>
  <br/>
  <label for="description">description:</label><br/>
  <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
  <br/>
  <label for="rating"> rating:</label><br/>
  <input type="number" onChange={(e)=>setRating(e.target.value) } min={1} max={5}/>
  <br/>
  <label for="image"> image:</label><br/>
  <input type="text" onChange={(e)=>setImage(e.target.value)} />
  <br/>
  <label for="type"> type:</label><br/>
  <input type="text" onChange={(e)=>setType(e.target.value)} />
  <br/>
  <label for="date"> date:</label><br/>
  <input type="text" onChange={(e)=>setDate(e.target.value)}/>
  <br/>
  
  <br/>
  <input type="submit" value="Submit" onClick={(e)=>
  {e.preventDefault();
  addMovie({name,description,rating,image,type,date,id : Math.random()});
   handleClose()
  }}/>
</form> 
</Box>
      </Modal>
    </div>
  );
}
