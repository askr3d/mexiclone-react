import { useDispatch, useSelector } from "react-redux"
import { checkingCars, searchingCars } from "../../store/web/";
import { clienteLocalAxios } from "../../config";

export const homeStore = () => {
    const { entrega, devolucion, fechaInicio, fechaFinal, status } = useSelector( state => state.webHome );
    const dispatch = useDispatch();

    const startSearchCars = async({ entrega, devolucion, fechaInicio, fechaFinal }) => {
        dispatch( checkingCars() );
        const result = clienteLocalAxios.get('/search/cars', {
            params: {
                entrega,
                devolucion,
                fechaInicio,
                fechaFinal
            }
        });
    }

    return {
        //Propiedades
        entrega,
        devolucion,
        fechaInicio,
        fechaFinal,
        status,

        //Metodos
        startSearchCars
    }
}