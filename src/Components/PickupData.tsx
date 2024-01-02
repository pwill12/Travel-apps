import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomUpdatedDate,
  randomAddress,
} from '@mui/x-data-grid-generator';

export default function Pickuptable() {
  return (
    <div style={{ height: 500, width: '100%',backgroundColor: 'white'}}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
}


const columns: GridColDef[] = [
  { field: 'name', headerName: 'Country', width: 280, },
  {
    field: 'address',
    headerName: 'Address',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 350,
  },
  {
    field: 'dateCreated',
    headerName: 'Open',
    type: 'date',
    width: 300,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 200,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 6,
    name: 'Ghana Station Alabar',
    address: randomAddress(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
