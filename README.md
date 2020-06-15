# Platzom

Platzom its a invented language for the [JavaScript fundamentals](https://platzi.com/js) course. [Platzi](https://platzi.com)

## Language description
- Si la palabra termina en ar, se le quitan esos dos carácteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra es mayor a 10 carácteres, debes partirlo a la mitad y unirlo con un "-"
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta se retorna la misma palabra intercalando Mayúsculas y Minúsculas

## Instalation
```
npm install platzom
```

## Use
```
import platzom from 'platzom'
platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarpe
platzom("abecedario") // abece - dario
platzom("sometemos") // SoMeTeMoS

## Credits
- [Geovani Robles](https://www.instagram.com/gvnrobles/)

## License
[MIT](https://opensource.org/licenses/MIT)
```