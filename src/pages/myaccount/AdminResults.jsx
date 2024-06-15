import "./adminResults.css";
import Card from "../../components/card/Card";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import SearcherUsers from "../../components/searcher/SearcherUsers.jsx";
import useFetch from "../../utils/useFetch.js";
import {useSearchParams} from "react-router-dom";

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
import {useState, useEffect} from "react";

const TableResults = () => {
  //Aux functions
  const checkBool = value => {
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    return value;
  };

  const columns = [
    {id: "id", name: "Id"},
    {id: "nameu", name: "Name"},
    {id: "nickname", name: "Nickname"},
    {id: "email", name: "Email"},
    {id: "country", name: "Country"},
    {id: "statusu", name: "Status"},
    {id: "isadmin", name: "Admin?"},
    {id: "actions", name: "Actions"}, // Nueva columna para los botones
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

  //states
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //fetch to api
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const {data, isPending, error} = useFetch(
    `/searchFilterUsers?search=${search}`,
  );

  useEffect(() => {
    if (data) {
      setRows(data.data);
    }
  }, [data]);

  if (isPending) {
    return <p>Is loading...</p>;
  }

  if (error) {
    if (!search) return <p>Ingrese un termino de búsqueda</p>;
    return <p>{error}</p>;
  }

  return (
    <>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  console.log(row);
                  return (
                    <TableRow key={row.id}>
                      {columns.map((column, colIndex) => {
                        let value = row[column.id];
                        if (column.id === "actions") {
                          let buttonAction;
                          if (row.status) {
                            buttonAction = (
                              <PrimaryBtnForm
                                onClick={() => handleDeleteUser(row.id)}
                                type="button"
                                text="Bannear"
                                cssClasses="baseBtn commentsBtn blueBtn"
                              />
                            );
                          } else {
                            buttonAction = (
                              <PrimaryBtnForm
                                onClick={() => handleDeleteUser(row.id)}
                                type="button"
                                text="Bannear"
                                cssClasses="baseBtn commentsBtn blueBtn"
                              />
                            );
                          }

                          return (
                            <TableCell key={colIndex}>{buttonAction}</TableCell>
                          );
                        } else if (
                          column.id === "statusu" ||
                          column.id === "isadmin"
                        ) {
                          return (
                            <TableCell key={colIndex}>
                              {checkBool(value)}
                            </TableCell>
                          );
                        } else {
                          return <TableCell key={colIndex}>{value}</TableCell>;
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
        rowsPerPage={rowsPerPage}
        page={page}
        count={rows.length}
        component="div"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

const AdminResults = () => {
  return (
    <>
      <Card h1Text="Administrar usuarios" h1Center>
        <SearcherUsers holder="Busca a un usuario" toNavigate="results" />
      </Card>
      <Card h1Text="Resultados" h1Center>
        <TableResults />
      </Card>
    </>
  );
};

export default AdminResults;
