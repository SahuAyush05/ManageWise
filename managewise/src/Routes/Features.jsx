
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Checkbox,
  IconButton,
  FormControlLabel,
  Pagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Feature() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleCheckboxChange = (id) => {
    const updatedSelection = selectedRows.includes(id)
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(updatedSelection);
  };

  const handleSelectAll = () => {
    const allIds = filteredData.map(item => item.id);
    setSelectedRows(selectedRows.length === allIds.length ? [] : allIds);
  };

  const handleDeleteSelected = () => {
    const updatedData = data.filter(item => !selectedRows.includes(item.id));
    setData(updatedData);
    setFilteredData(updatedData);
    setSelectedRows([]);
  };

  const renderActionButtons = (id) => (
    <>
      <IconButton color="primary" onClick={() => handleEdit(id)}>
        <EditIcon />
      </IconButton>
      <IconButton color="secondary" onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </>
  );

  const handleEdit = (id) => {
    // Implement editing logic
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const renderPagination = () => (
    <Pagination
      count={Math.ceil(filteredData.length / rowsPerPage)}
      page={currentPage}
      onChange={handlePageChange}
    />
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <TextField
        label="Search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <FormControlLabel
                  control={<Checkbox checked={selectedRows.length === filteredData.length} onChange={handleSelectAll} />}
                  label="Select All"
                />
              </TableCell>
              {Object.keys(filteredData[0] || {}).map(key => (
                <TableCell key={key}>{key}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
              .map(item => (
                <TableRow key={item.id} style={{ background: selectedRows.includes(item.id) ? '#e0e0e0' : 'transparent' }}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell>
                  {Object.values(item).map((value, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                  <TableCell>{renderActionButtons(item.id)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {renderPagination()}

      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteSelected}
        disabled={selectedRows.length === 0}
      >
        Delete Selected
      </Button>
    </div>
  );
}

export default Feature;