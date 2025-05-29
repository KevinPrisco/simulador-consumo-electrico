import { Aparatos, ciudades, estratos } from "../datos/helpers-datos";

export default function CalcularConsumos(UserData) {
  const { personas, estrato, ciudad, casaAntigua, aparatos } = UserData;

  // 1. Obtener la tarifa base
  const ciudadTarifa = ciudades.find((c) => c.id === ciudad)?.costo ?? 0;
  const estratoTarifa = estratos.find((e) => e.id === estrato)?.modificador ?? 0;
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
      consumoPorHabitacion[habitacion] = 0;
    }
    consumoPorHabitacion[habitacion] += consumoWh;
  }

  // 4. Convertir a kWh
  const consumoTotalKWh = consumoTotalWh / 1000;
  const costoTotal = consumoTotalKWh * tarifaFinal;

  // 5. Consumos por persona
  const personasNum = parseInt(personas) || 1;
  const consumoPorPersona = Math.round((consumoTotalKWh / personasNum) * 100) / 100;
  const costoPorPersona = costoTotal / personasNum;

  // 6. Convertir consumo por habitación a kWh
  const consumoHabitacionesKWh = {};
  for (const hab in consumoPorHabitacion) {
    consumoHabitacionesKWh[hab] = consumoPorHabitacion[hab] / 1000;
  }

  // 7. Resultado final
  return {
    consumoTotalKWh,
    consumoPorPersonaKWh: consumoPorPersona,
    costoTotal,
    costoPorPersona,
    consumoPorHabitacion: consumoHabitacionesKWh,
  };
}
