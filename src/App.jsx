import { useState,useEffect } from 'react';
import './App.css'
import ModalForm from './componenets/form-modal';
import BasicTable from './componenets/table'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const testData = [
  {
    taskName: "Ui issue",
    taskDesc: "Lorem ipsum dolor sit amet consectetur",
    date : "28-01-2024"
  },
  {
    taskName: "Login issue",
    taskDesc: "Lorem ipsum dolor sit amet consectetur",
    date : "29-01-2024"
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);
  const [tableData , setTableData] = useState(testData)
  
  const handleSubmit = (e,name,desc,date) => {
    e.preventDefault()
    const updatedData = [...tableData, { taskName: name, taskDesc: desc,date : date }]
    setTableData(updatedData)
    localStorage.setItem('tableListDetails', JSON.stringify(updatedData));
    handleClose()
  }


  const handleDelete = (id) => {
   console.log('handleDelete',id)
   const tableDetails = [...tableData]
   let updateTableData = tableDetails.filter((item,index) => index !== id)
   alert('record deleted..!!')
   setTableData(updateTableData)
  }



  useEffect(() => {
    let retrievedData = localStorage.getItem('tableListDetails');
    retrievedData = JSON.parse(retrievedData)
    console.log(retrievedData)
    if(retrievedData?.length > 0)setTableData(retrievedData)
  }, [])
  

  return (
   <>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Jira clone
              </Typography>
              <Button variant="contained" color="primary"  onClick={handleOpen}>Add New</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <ModalForm open={open} handleClose={handleClose} handleSubmit = {handleSubmit}/>

        <BasicTable tableData = {tableData} handleOpen={handleOpen} handleDelete={handleDelete}/>
    </>
  )
}

export default App
