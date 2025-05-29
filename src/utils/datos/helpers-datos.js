import aparatos from "./tabla-consumos.json";
export const Aparatos = aparatos;

export const habitaciones = [
  { id: 1, label: "Cocina", name: "cocina" },
  { id: 2, label: "Sala", name: "sala" },
  { id: 3, label: "Dormitorio", name: "dormitorio" },
  { id: 4, label: "Baño", name: "baño" },
  { id: 5, label: "Lavadero", name: "lavadero" },
  { id: 6, label: "Oficina", name: "oficina" },
  { id: 7, label: "Garage", name: "garage" },
  { id: 8, label: "Terraza, Patio o Sótano", name: "terraza, patio o sotano" },
  { id: 9, label: "Otra", name: "otra" },
];

export const ciudades = [
  { id: "bogota", label: "Bogotá", costo: 600 },
  { id: "medellin", label: "Medellín", costo: 580 },
  { id: "cali", label: "Cali", costo: 620 },
  { id: "cartagena", label: "Cartagena", costo: 610 },
  { id: "barranquilla", label: "Barranquilla", costo: 605 },
];


export const estratos = [
  { id: "1", label: "Estrato 1", modificador: 0.6 },
  { id: "2", label: "Estrato 2", modificador: 0.7 },
  { id: "3", label: "Estrato 3", modificador: 0.9 },
  { id: "4", label: "Estrato 4", modificador: 1.0 },
  { id: "5", label: "Estrato 5", modificador: 1.1 },
  { id: "6", label: "Estrato 6", modificador: 1.2 },
];
