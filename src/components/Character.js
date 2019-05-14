import React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Character = props => {
  return (
    <Paper className="char-card">
      <h3>{props.character.name}</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Birth Year</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{props.character.birth_year}</TableCell>
            <TableCell>{props.character.gender}</TableCell>
            <TableCell>{props.character.height}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
};

export default Character;
