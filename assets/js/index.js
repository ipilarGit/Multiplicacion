const validarNumero = () => {
  // Ingreso numero de la tabla de multiplicacion
  let numero = +prompt("Ingrese un número entre 1 y 20");

  while (numero < 1 || numero > 20) {
    numero = +prompt("Ingrese un número entre 1 y 20");
  }
  return numero;
};

const multiplicacion = () => {
  const numero = validarNumero();

  console.log("Tabla del: ", numero);
  document.getElementById(
    "parrafo"
  ).innerHTML = `Tabla del: ${numero} <br><br>`;

  for (let i = 1; i <= numero; i++) {
    let multiplica = i * numero;
    console.log(`${i} x ${numero} = ${multiplica}`);
    document.getElementById(
      "parrafo"
    ).innerHTML += `${i} x ${numero} = ${multiplica} <br>`;
  }

  for (let i = 1; i <= numero; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial = factorial * j;
    }
    console.log(`Factorial de ${i} es: ${factorial}`);
    document.getElementById(
      "parrafo"
    ).innerHTML += `Factorial de ${i} es: ${factorial} <br>`;
  }
};

multiplicacion();
