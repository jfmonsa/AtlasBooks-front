import Card from "../../components/card/Card";
import Searcher from "../../components/searcher/Searcher";
//Table imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {useEffect, useState} from "react";
import {
  getSearchUsers as getSearchUsersApi,
  // deleteComment as deleteCommentApi,
  // updateComment as updateCommentApi,
} from "../../data/apiSearchUsers.js";

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

  const [rows, setRowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  //Fetch data from api
  useEffect(() => {
    getSearchUsersApi()
      .then(data => {
        setRowchange(data);
        console.log(data);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      {/* sx={{maxHeight: 450}} */}
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  // style={{backgroundColor: "black", color: "white"}}
                  key={column.id}
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => {
                  return (
                    <TableRow key={i}>
                      {columns &&
                        columns.map((column, i) => {
                          let value = row[column.id];
                          return <TableCell key={value}>{value}</TableCell>;
                        })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowperpage}
        page={page}
        count={rows.length}
        component="div"
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </>
  );
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
