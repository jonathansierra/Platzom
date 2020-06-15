export  default function platzom(str) {
  let traslation = str;

  //Si la palabra original es un palíndromo,
  //ninguna regla anterior cuenta
  //se retorna la misma palabra intercalando Mayúsculas y Minúsculas
  const reverse = (str) => str.split('').reverse().join('');

  const minMay = (str) => {
    const length = str.length;
    let traslation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      traslation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return traslation;
  }

  if(str == reverse(str)) {
    return minMay(str);
  }
  
  //Si la palabra termina en ar, se le quitan esos dos carácteres
  if(str.toLowerCase().endsWith('ar')) {
    traslation = str.slice(0, -2);
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if(str.toLowerCase().startsWith('z')) {
    traslation += 'pe';
  }

  //Si la palabra es mayor a 10 carácteres, debes partirlo a la mitad y unirlo
  //con un "-"
  const length = traslation.length;
  if(traslation.length >= 10) {
    const firstHalf = traslation.slice(0, Math.round(length / 2));
    const secondHalf = traslation.slice(Math.round(length / 2));
    traslation = `${firstHalf} - ${secondHalf}`;
  }

  return traslation;
}