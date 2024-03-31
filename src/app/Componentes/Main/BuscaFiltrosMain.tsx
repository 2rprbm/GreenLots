import { TextoEstilizado } from "./BuscaFiltrosMainStyles";
import Filtros from "./Filtros";



const BuscaFiltrosMain = () => {
    return (
        <>
            <TextoEstilizado component={'h2'}>
                 ENCONTRE O LOTE QUE VOCÊ TANTO PROCURA:
            </TextoEstilizado>
            <Filtros/>
        </>
    )
}

export default BuscaFiltrosMain;
