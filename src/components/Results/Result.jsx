"use client";

import React from "react";
import ResultChars from "./ResultChars";
import ResultCard from "./ResultCard";
import CustomBarChart from "./CustomBarChart";

export default function Result({ consumos }) {
  const consumoData = Object.entries(consumos.consumoPorHabitacion).map(
    ([habitacion, valores]) => ({
      habitacion,
      valor: valores.consumoKWh,
    })
  );

  const costoData = Object.entries(consumos.consumoPorHabitacion).map(
    ([habitacion, valores]) => ({
      habitacion,
      valor: valores.costo,
    })
  );
  
  return (
    <div className="result-grid">
      <ResultCard
        title="Consumo total"
        value={consumos.consumoTotalKWh}
        unit="kWh"
        icon="icon-consumo label-icon"
      />
      <ResultCard
        title="Consumo por persona"
        value={consumos.consumoPorPersonaKWh}
        unit="kWh"
        icon="icon-consumo-persona label-icon"
      />
      <div className="grid-item ">
        <CustomBarChart data={consumoData} label="Consumo (kWh)" />
        <div className="card-info-container">
          <h2 className="text-xl font-semibold mb-4">Consumo por habitación</h2>
        </div>
      </div>
      <ResultCard
        title="Costo total"
        value={consumos.costoTotal}
        unit="COP"
        icon="icon-costo label-icon"
      />
      <ResultCard
        title="Costo por persona"
        value={consumos.costoPorPersona}
        unit="COP"
        icon="icon-costo-persona label-icon"
      />
      <div className="grid-item">
        <CustomBarChart data={costoData} label="Costo (COP)" />

        <div className="card-info-container">
          <h2 className="text-xl font-semibold mb-4">Costo por habitación</h2>
        </div>
      </div>
    </div>
  );
}
