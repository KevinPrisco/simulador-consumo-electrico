"use client"
import DynamicForm from '@simulador/components/Form/DynamicForm'
import FormGeneral from '@simulador/components/Form/FormGeneral'
import CalcularConsumos from '@simulador/utils/calculos/calcularConsumo';
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  // const [userData, setUserData] = useState({});
  const dynamicFormRef = useRef();

  function CalcularCosto(FormGeneralData) {
    const dynamicData = dynamicFormRef.current?.getData?.();

    const consumos = CalcularConsumos({
      ...FormGeneralData,
      aparatos: dynamicData || [],
    });

    console.log(consumos);
  }

  return (
    <div className="main">
      <h1>Simulador de consumo electrico</h1>
      <div className="container-form">
        <FormGeneral CalcularCosto={CalcularCosto} />
        <DynamicForm ref={dynamicFormRef} />
      </div>
    </div>
  );
}
