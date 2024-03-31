'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, FormControl, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { BotaoImovelCardEstilizado, InformacoesImovelCardEstilizado, PrecoImovelCardEstilizado, TablePaginationEstilizado } from './CardImovelStyles';
import { terrenos } from '../../assets/data/terrenos';
import { TerrenosProps } from '../../assets/data/interfaces';
import { MenuItemOrdenadorEstilizado, SelectOrdenadorEstilizado, TextoOrdenarPorEstilizado } from './FiltrosStyles';
import { useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const CardImovel = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof TerrenosProps>('metragem');
  const [ordenador, setOrdenador] = useState("Mais Recentes");

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - terrenos.length) : 0;

  const mudarOrdenacao = (event: SelectChangeEvent) => {
    setOrdenador(event.target.value);
  };
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const terrenosPorPagina = React.useMemo(
    () =>
      stableSort(terrenos, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, terrenos],
  );

  return (
    <Box
      sx={{
        marginBottom: '36px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          alignSelf: 'end',
          display: 'flex',
          columnGap: '1rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}
      >
        <TextoOrdenarPorEstilizado>ORDENAR POR:</TextoOrdenarPorEstilizado>
        <FormControl variant="filled" sx={{ m: 1, width: 190 }}>
          <SelectOrdenadorEstilizado
            labelId="ordenador"
            id="ordenador"
            value={ordenador}
            onChange={mudarOrdenacao}
          >
            <MenuItemOrdenadorEstilizado value={"Mais Recentes"}>Mais Recentes</MenuItemOrdenadorEstilizado>
            <MenuItemOrdenadorEstilizado value={"Valor"}>Valor</MenuItemOrdenadorEstilizado>
            <MenuItemOrdenadorEstilizado value={"Metragem"}>Metragem</MenuItemOrdenadorEstilizado>
          </SelectOrdenadorEstilizado>
        </FormControl>
      </Box>
      <Paper
        sx={{
          width: '100%',
          mb: 2,
          boxShadow: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TableContainer
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Table
            sx={{ width: 1100 }}
            aria-labelledby="tableTitle"
          >
            <TableBody
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: '20px',
                maxWidth: '1100px',
                rowGap: '40px',
                marginBottom: '5rem'
              }}
            >
              {terrenosPorPagina.map((terreno, index) => {
                return (
                  <Card sx={{ maxWidth: 347, height: 380 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="240"
                        image={terreno.imagemCapa}
                        alt="terreno a venda"
                      />
                      <CardContent
                        sx={{
                          paddingBottom: '0'
                        }}
                      >
                        <PrecoImovelCardEstilizado
                          gutterBottom
                          component="h5"
                        >
                          {terreno.preco}
                        </PrecoImovelCardEstilizado>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        padding: '0 16px 16px 16px'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: '0.15rem'
                        }}
                      >
                        <InformacoesImovelCardEstilizado>
                          {terreno.cidade}
                        </InformacoesImovelCardEstilizado>
                        <InformacoesImovelCardEstilizado>
                          {terreno.bairro}
                        </InformacoesImovelCardEstilizado>
                        <InformacoesImovelCardEstilizado>
                          {terreno.metragem}
                        </InformacoesImovelCardEstilizado>
                      </Box>
                      <BotaoImovelCardEstilizado size="small">
                        SAIBA MAIS
                      </BotaoImovelCardEstilizado>
                    </CardActions>
                  </Card>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationEstilizado
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={terrenos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default CardImovel;