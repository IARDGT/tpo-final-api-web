import { ClaseItem } from "./ClaseItem";
import { useState, useEffect } from 'react';
import { getCatalogo } from '../controller/clase.controller';

const normalizeCategoria = (categoria) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };


export const ListaClasesHome = ({ cantidadMax, urlClase }) => {

    const contenido = [];
    const [datos, setDatos] = useState([]);

    useEffect(() => {
      const handleCatalogo = async () => {
        try {
          const res = await getCatalogo();
          setDatos(res);
        } catch (error) {
          console.error('Error al obtener datos del catálogo:', error);
          setDatos([]);
        }
      };
  
      handleCatalogo();
    }, []);

    console.log('datos ----->', datos);

  datos.slice(0, cantidadMax).forEach((clase) => {
    contenido.push(
      <ClaseItem
      clase={clase}
        urlClase={urlClase + '/' + clase.claseId}
        key={clase.claseId}
      />
    );
  });

return (
    <>
        <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
            {contenido}
        </div>
    </>
)
}
