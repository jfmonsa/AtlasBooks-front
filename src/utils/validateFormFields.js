//Retornar true -> ok; Retornar false->error

export function valEmail(str) {
  // Expresión regular para validar email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.trim().test(str);
}

export function valNickname(str) {
  // Expresión regular para validar nickname sin espacios
  const regex = /^\S+$/;
  return regex.trim().test(str);
}

export function valPassword(str) {
  // Verificar si la clave tiene al menos 6 caracteres
  // Verificar si la clave tiene al menos 8 caracteres, una mayúscula, un número y un carácter especial
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(str) && str.trim().length >= 6;
}
export function valNoEmpty(str) {
  // Expresión regular para validar que la cadena no este vacia
  return "" != str.trim();
}
