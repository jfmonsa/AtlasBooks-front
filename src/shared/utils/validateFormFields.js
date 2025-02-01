//Retornar true -> ok; Retornar false->error

export function valEmail(str) {
  str = str.trim();
  // Expresión regular para validar email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
}

export function valNickname(str) {
  str = str.trim();
  // Expresión regular para validar nickname sin espacios
  const regex = /^\S+$/;
  return regex.test(str);
}

export function valPassword(str) {
  str = str.trim();
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 20;

  const ONE_DIGIT = "(?=.*[0-9])";
  const LOWER_CASE = "(?=.*[a-z])";
  const UPPER_CASE = "(?=.*[A-Z])";
  const SPECIAL_CHAR = "(?=.*[@#$%^&+=])";

  const MIN_MAX_CHAR = `.{${MIN_LENGTH},${MAX_LENGTH}}`;

  const PATTERN = `^${ONE_DIGIT}${LOWER_CASE}${UPPER_CASE}${SPECIAL_CHAR}${MIN_MAX_CHAR}$`;

  return str.match(PATTERN) !== null;
}

export function valNoEmpty(str) {
  str = str.trim();
  // Expresión regular para validar que la cadena no este vacia
  return "" != str;
}
