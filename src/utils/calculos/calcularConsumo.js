import { Aparatos, ciudades, estratos } from "../datos/helpers-datos";

export default function CalcularConsumos(UserData) {
  const { personas, estrato, ciudad, casaAntigua, aparatos } = UserData;

  // 1. Obtener la tarifa base
  const ciudadTarifa = ciudades.find((c) => c.id === ciudad)?.costo ?? 0;
  const estratoTarifa =
    estratos.find((e) => e.id === estrato)?.modificador ?? 0;
  let tarifaFinal = ciudadTarifa + estratoTarifa;

  // 2. Si casa antigua, +10% al costo
  if (casaAntigua) {
    tarifaFinal *= 1.1;
  }

  let consumoTotalWh = 0;
  const consumoPorHabitacion = {};

  // 3. Procesar cada aparato
  for (const aparato of aparatos) {
    const { potencia, horas, dias, habitacion } = aparato;
    const consumoWh = potencia * horas * dias;
    consumoTotalWh += consumoWh;

    if (!consumoPorHabitacion[habitacion]) {
      consumoPorHabitacion[habitacion] = { consumoWh: 0, costo: 0 };
    }

    consumoPorHabitacion[habitacion].consumoWh += consumoWh;
  }

  // 4. Convertir total a kWh
  const consumoTotalKWh = consumoTotalWh / 1000;
  const costoTotal = consumoTotalKWh * tarifaFinal;

  // 5. Consumos por persona
  const personasNum = parseInt(personas) || 1;
  const consumoPorPersona =
    Math.round((consumoTotalKWh / personasNum) * 100) / 100;
  const costoPorPersona = Math.round((costoTotal / personasNum) * 100) / 100;

  // 6. Convertir consumo por habitación a kWh y calcular costo por habitación
  const consumoHabitaciones = {};
  for (const hab in consumoPorHabitacion) {
    const consumoKWh = consumoPorHabitacion[hab].consumoWh / 1000;
    const costo = Math.round(consumoKWh * tarifaFinal * 100) / 100;

    consumoHabitaciones[hab] = {
      consumoKWh: Math.round(consumoKWh * 100) / 100,
      costo,
    };
  }

  // 7. Resultado final
  return {
    consumoTotalKWh: Math.round(consumoTotalKWh * 100) / 100,
    consumoPorPersonaKWh: consumoPorPersona,
    costoTotal: Math.round(costoTotal * 100) / 100,
    costoPorPersona,
    consumoPorHabitacion: consumoHabitaciones,
  };
}
