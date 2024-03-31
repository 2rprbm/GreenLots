import { Box, Button, Paper} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { SelectCidadeEstilizado, InputLabelCidadeEstilizado, SelectBairroEstilizado, InputLabelBairroEstilizado, InputLabelValorEstilizado, FilledInputValorEstilizado, InputLabelAreaTotalEstilizado, FilledInputAreaTotalEstilizado } from "./FiltrosStyles";
import InputAdornment from '@mui/material/InputAdornment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filtros = () => {

    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');

    const mudarCidade = (event: SelectChangeEvent) => {
        setCidade(event.target.value);
    };

    const mudarBairro = (event: SelectChangeEvent) => {
        setBairro(event.target.value);
    };

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    maxWidth: '100%',
                    height: '5rem',
                    margin: '1rem 0',
                    border:'1px solid #84bd3f',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
                    <InputLabelCidadeEstilizado id="cidade-filtro">
                        Encontre a CIDADE desejada
                    </InputLabelCidadeEstilizado>
                    <SelectCidadeEstilizado
                        labelId="cidade-filtro"
                        id="cidade-filtro"
                        value={cidade}
                        onChange={mudarCidade}
                    >
                        <MenuItem value=""
                            sx={{
                                height: '36px!important'
                            }}
                        ></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </SelectCidadeEstilizado>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
                    <InputLabelBairroEstilizado id="bairro-filtro">
                        Busque por BAIRRO
                    </InputLabelBairroEstilizado>
                    <SelectBairroEstilizado
                        labelId="bairro-filtro"
                        id="bairro-filtro"
                        value={bairro}
                        onChange={mudarBairro}
                    >
                        <MenuItem value=""
                            sx={{
                                height: '36px!important'
                            }}
                        ></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </SelectBairroEstilizado>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: 200 }} variant="filled">
                    <InputLabelValorEstilizado htmlFor="filled-adornment-valor">VALOR total até:</InputLabelValorEstilizado>
                    <FilledInputValorEstilizado
                        id="filled-adornment-valor"
                        startAdornment={<InputAdornment position="start">R$ </InputAdornment>}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: 200 }} variant="filled">
                    <InputLabelAreaTotalEstilizado htmlFor="filled-adornment-area-total">Área mínima:</InputLabelAreaTotalEstilizado>
                    <FilledInputAreaTotalEstilizado id="filled-adornment-area-total"/>
                </FormControl>
                <Button 
                    variant="contained"
                    endIcon={<FilterAltIcon sx={{fontSize: '2rem!important'}} />}
                    sx={{
                        marginRight: '1rem',
                        textTransform: 'none',
                        height: '48px',
                        backgroundColor: '#00b8eb'
                    }}
                >
                    + filtros
                </Button>
                <Button 
                    variant="contained"
                    sx={{
                        height: '48px',
                        backgroundColor: '#84bd3f'
                    }}
                >
                    BUSCAR TERRENOS
                </Button>
            </Paper>
        </Box>
    )
}

export default Filtros;