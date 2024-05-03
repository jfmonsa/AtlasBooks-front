import Card from "../../components/card/Card";
import Searcher from "../../components/searcher/Searcher";
//Table imports
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import {useEffect, useState} from "react";

const TableResults = () => {
  const columns = [
    {id: "id", name: "Id"},
    {id: "name", name: "Name"},
    {id: "country", name: "Country"},
    {id: "status", name: "Status"},
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = event => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  return "hola";
};

const AdminResults = ({kindOfQuery}) => {
  return (
    <>
      <Card h1Text="Administrar usuarios" h1Center>
        <Searcher holder="Busca a un usuario" toNavigate="results"></Searcher>
      </Card>
      <Card h1Text="Resultados" h1Center>
        <TableResults />
      </Card>
    </>
  );
};
export default AdminResults;
