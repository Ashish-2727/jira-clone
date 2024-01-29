import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';


const BasicTable = ({ tableData,handleOpen,handleDelete}) => {

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Task Name</TableCell>
                <TableCell align="left">Task Description</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {tableData?.map((row,id) => (
                <TableRow
                key={row.taskName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.taskName}
                </TableCell>
                <TableCell align="left">{row.taskDesc}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    <ModeEditOutlineIcon style={{cursor: "pointer"}}   onClick={handleOpen} /> 
                    <DeleteIcon style={{cursor: "pointer"}} onClick={ () => handleDelete(id)}/> 
                </TableCell>
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  );
}


export default BasicTable;
