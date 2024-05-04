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
  const checkBool = value => {
    if (typeof value == "boolean") {
      return value ? "true" : "false";
    }
    return value;
  };

  const columns = [
    {id: "id", name: "Id"},
    {id: "name", name: "Name"},
    {id: "country", name: "Country"},
    {id: "status", name: "Status"},
    {id: "admin", name: "Admin?"},
    {id: "actions", name: "Actions"}, // Nueva columna para los botones
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = event => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  //Actions
  const handleDeleteUser = userId => {
    // Lógica para eliminar un usuario
    console.log(`Eliminar usuario con ID: ${userId}`);
  };

  const handleMakeAdmin = userId => {
    // Lógica para hacer administrador a un usuario
    console.log(`Hacer administrador al usuario con ID: ${userId}`);
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
                .map(row => {
                  return (
                    <TableRow key={row.id}>
                      {columns &&
                        columns.map((column, colIndex) => {
                          let value = checkBool(row[column.id]);
                          if (column.id === "actions") {
                            return (
                              <TableCell key={colIndex}>
                                <button
                                  onClick={() => handleDeleteUser(row.id)}
                                >
                                  Eliminar
                                </button>
                                <button onClick={() => handleMakeAdmin(row.id)}>
                                  Hacer Admin
                                </button>
                              </TableCell>
                            );
                          } else if (
                            column.id === "status" ||
                            column.id === "admin"
                          ) {
                            return (
                              <TableCell key={colIndex}>
                                {checkBool(value)}
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={colIndex}>
                                {row[column.id]}
                              </TableCell>
                            );
                          }
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
