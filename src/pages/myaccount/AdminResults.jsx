import Card from "../../components/card/Card";
import Searcher from "../../components/searcher/Searcher";
//Table imports
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import {useEffect, useState} from "react";
import {
  getSearchUsers as getSearchUsersApi,
  // createComment as createCommentApi,
  // deleteComment as deleteCommentApi,
  // updateComment as updateCommentApi,
} from "../../../data/apiSearchUsers.js";

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

  const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  //Fetch data from api
  useEffect(() => {
    getCommentsApi()
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        rowchange(resp);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

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
