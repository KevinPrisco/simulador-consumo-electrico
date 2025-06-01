"use client"
import DynamicForm from '@simulador/components/Form/DynamicForm'
import FormGeneral from '@simulador/components/Form/FormGeneral'
import Result from '@simulador/components/Results/Result';
import CalcularConsumos from '@simulador/utils/calculos/calcularConsumo';
import React, { useRef, useState } from 'react'

export default function page() {
  const [userConsumos, setuserConsumos] = useState({});
  const [ShowResults, setShowResults] = useState(false);
  const dynamicFormRef = useRef();

  function CalcularCosto(FormGeneralData) {
    const dynamicData = dynamicFormRef.current?.getData?.();

    const consumos = CalcularConsumos({
      ...FormGeneralData,
      aparatos: dynamicData || [],
    });
    
    setuserConsumos(consumos);
    setShowResults(true);
    
  }

  return (
    <div className="main">
      <h1>Simulador de consumo electrico</h1>
      <div className="container-form">
        <FormGeneral CalcularCosto={CalcularCosto} />
        <DynamicForm ref={dynamicFormRef} />
      </div>
      <div className="container-results w-full">
        {ShowResults && <Result consumos={userConsumos} />}
      </div>
    </div>
  );
}
