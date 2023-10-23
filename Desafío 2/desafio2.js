const data = require('./users.json').users

const hombresMayores = data.filter((persona) => {
    return persona.age >= 50 && persona.gender == "male"
})

hombresMayores.forEach((hombreMayor) => {
    console.log(`${hombreMayor.firstName} ${hombreMayor.lastName}`)
})

// USO DE MAP Y FOREACH
  const edades = data.map((persona) => persona.age);
  let sumaEdades = 0;
  
  edades.forEach((edad) => {
    sumaEdades += edad;
  });
  
  const edadPromedio = sumaEdades / edades.length;
  
  // USO DE FILTER Y FOREACH 
  console.log('Personas mayores de 50 años:');
  data
    .filter((persona) => persona.age > 50)
    .forEach((persona) => {
      console.log(`- ${persona.firstName} ${persona.lastName} (${persona.age} años)`);
    });
  
  // REDUCE
  const conteoGenero = data.reduce(
    (conteo, persona) => {
      if (persona.gender === 'male') {
        conteo.hombres++;
      } else if (persona.gender === 'female') {
        conteo.mujeres++;
      }
      return conteo;
    },
    { hombres: 0, mujeres: 0 }
  );
  
  // INFORMACIÓN  CLARA Y ORDENADA PARA MOSTRAR AL JEFE
  console.log('Resumen del análisis de mercado:');
  console.log(`- Edad promedio de las personas: ${edadPromedio.toFixed(2)} años`);
  console.log(`- Cantidad de hombres: ${conteoGenero.hombres}`);
  console.log(`- Cantidad de mujeres: ${conteoGenero.mujeres}`);
  