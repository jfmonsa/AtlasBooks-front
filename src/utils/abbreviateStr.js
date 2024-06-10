const abbreviateStr = cadena => {
  if (cadena.length <= 8) {
    return cadena; // Si la cadena tiene 8 caracteres o menos, se devuelve tal cual
  }
  const primeraParte = cadena.slice(0, 6); // Obtener los primeros 6 caracteres
  const ultimaParte = cadena.slice(-6); // Obtener los últimos 6 caracteres
  return `${primeraParte}...${ultimaParte}`; // Devolver la cadena abreviada
};

export default abbreviateStr;
