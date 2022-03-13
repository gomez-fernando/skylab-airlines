let name;
let scale = "";
var flights = [

  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){ 
    sum += array[i].cost;
  }
  return ((sum / array.length).toFixed(2));
}

const airline = () => {
  do {
    name = prompt(`Bienvenido/a a SkyLab Airlines !!
Dinos tu nombre`);
  
  } while (name === null || name === "");
  

  console.info(`Hola ${name},
Esta es la lista de vuelos para hoy: \n\n`);
  for (let i = 0; i < flights.length; i++) {
    (flights[i].scale)
      ? scale = "Sí"
      : scale = "No";
    console.log(`ID: ${flights[i].id} | Origen: ${flights[i].from} | Destino: ${flights[i].to} | Coste: ${flights[i].cost} | Escala: ${scale}`);
  }

  console.log('\n*****************');
  console.info(`El coste medio de los vuelos es:
$ ${average(flights)}`);
  console.log('\n*****************');

  let totalWithScales = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) totalWithScales++;
  };
  
  console.info(`Los vuelos que realizan escalas son: ${totalWithScales}`);

  console.log('\n*****************');
  console.info('Los últimos 5 vuelos del día son: \n');

  for (let i = flights.length - 1; i > (flights.length - 6); i--) {
console.log(` Destino: ${flights[i].to} | Origen: ${flights[i].from}`);
  }
}

airline();