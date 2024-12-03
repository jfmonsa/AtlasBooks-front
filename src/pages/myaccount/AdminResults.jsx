import "./adminResults.css";
import Card from "../../components/card/Card";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import SearcherUsers from "../../components/searcher/SearcherUsers.jsx";
import useFetch from "../../hooks/useFetch.js";
import { useSearchParams } from "react-router-dom";

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
import { useState, useEffect } from "react";
import { BanUser } from "../../api/apiBanUser.js";
import { UnbanUser } from "../../api/apiBanUser.js";

const TableResults = () => {
  //Aux functions
  const checkBool = (value) => {
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    return value;
  };

  const columns = [
    { id: "id", name: "Id" },
    { id: "fullName", name: "Name" },
    { id: "nickname", name: "Nickname" },
    { id: "email", name: "Email" },
    { id: "country", name: "Country" },
    { id: "isActive", name: "Status" },
    { id: "role", name: "Admin?" },
    { id: "actions", name: "Actions" }, // Nueva columna para los botones
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //states
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [reload, setReload] = useState(false);

  //fetch to api
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { data, isPending, error } = useFetch(
    `/search-filters/users?search=${search}&reload=${reload}`,
  );

  const reloadUsers = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    if (data) {
      setRows(data.data);
    }
  }, [data]);

  //Actions
  const handleBanUser = (userIdToBan, status) => {
    // Lógica para eliminar un usuario
    BanUser({ userIdToBan, status });
    reloadUsers();
  };

  const handleUnbanUser = (userIdToUnban, status) => {
    // Lógica para eliminar un usuario
    UnbanUser({ userIdToUnban, status });
    reloadUsers();
  };

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
              {columns.map((column) => (
                <TableCell key={column.id}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow key={row.id}>
                      {columns.map((column, colIndex) => {
                        console.log(row);
                        let value = row[column.id];
                        if (column.id === "actions") {
                          let buttonAction;
                          if (row.isActive) {
                            buttonAction = (
                              <PrimaryBtnForm
                                onClick={() => handleBanUser(row.id)}
                                type="button"
                                text="Ban"
                                cssClasses="baseBtn commentsBtn redBtn"
                              />
                            );
                          } else {
                            buttonAction = (
                              <PrimaryBtnForm
                                onClick={() =>
                                  handleUnbanUser(row.id, row.isActive)
                                }
                                type="button"
                                text="Unban"
                                cssClasses="baseBtn commentsBtn greenBtn"
                              />
                            );
                          }

                          return (
                            <TableCell key={colIndex}>{buttonAction}</TableCell>
                          );
                        } else if (
                          column.id === "isActive" ||
                          column.id === "ADMIN"
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
