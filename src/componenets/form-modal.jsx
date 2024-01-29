import  {  useState } from "react";
import { makeStyles } from "@material-ui/core";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const ModalForm = ({ open, handleClose ,handleSubmit}) => {
  const classes = useStyles();
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [taskName, setTaskName] = useState("")
  const [taskDesc , setTaskDesc] = useState("")


  const handleTextInputChange = (event) => {
    const {name , value } = event.target
    if(name !== '' && name === 'taskname')setTaskName(value)
    if(name !== '' && name === 'taskdesc')setTaskDesc(value)
  }


  return (
    
    <Dialog open={open} onClose={handleClose}>
    
    <form className={classes.root} onSubmit={(e) => handleSubmit(e,taskName,taskDesc,date)}>
        <TextField
            id="outlined-textarea"
            label="Task Name"
            placeholder="Enter task name"
            //error={nameError}
            defaultValue={taskName}
            name = "taskname"
            onChange= {handleTextInputChange}
        />
    
        <TextField
          id="outlined-textarea"
          label="Task Description"
          placeholder="Enter description "
          onChange= {handleTextInputChange}
          name="taskdesc"
          defaultValue={taskDesc}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker 
                    defaultValue={dayjs(date)}
                    minDate={date}
                    label="Add task deadline"
                    inputFormat="DD-MM-YYYY"
                    name = "taskdate"
                    onChange={(newValue) => setDate(dayjs(newValue).format('DD-MM-YYYY'))}
                 />
            </DemoContainer>
        </LocalizationProvider>
     
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </div>
    </form>
    </Dialog>
  );
};

export default ModalForm;
