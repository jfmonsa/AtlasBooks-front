import Card from "../../components/card/Card";
import Searcher from "../../components/searcher/Searcher";
//Table imports
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import {useEffect, useState} from "react";

const TableResults = () => {
  const columns = [
    {id: "id", name: "Id"},
    {id: "name", name: "Name"},
    {id: "email", name: "Email"},
    {id: "phone", name: "Phone"},
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = event => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };
};

const AdminResults = ({kindOfQuery}) => {
  return (
    <>
      <Card h1Text="Administrar usuarios" h1Center>
        <Searcher holder="Busca a un usuario" toNavigate="results"></Searcher>
      </Card>
    </>
  );
};
export default AdminResults;
