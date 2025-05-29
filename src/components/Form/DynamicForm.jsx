"use client";
import { PlusIcon } from "lucide-react";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import CustomSelect from "./SelectItem";
import { Aparatos, habitaciones } from "@simulador/utils/datos/helpers-datos";
import InputItem from "./InputItem";
import { Button } from "../ui/button";
import { nanoid } from "nanoid";

const DynamicForm = forwardRef((props, ref) => {
  const [formItem, setFormItem] = useState([]);
  const [formKey, setFormKey] = useState(1);

  useImperativeHandle(ref, () => ({
    getData: () => formItem,
  }));

  const addFormItem = () => {
    setFormItem([...formItem, { id: nanoid() }]);
  };

  const onChangeHabitaciones = (id, habitaciones) => {
    const { label, name } = habitaciones;
    const id_habitacion = habitaciones.id;

    setFormItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              id_habitacion,
              habitacion: name,
              aparato: undefined,
              potencia: undefined,
              id_aparato: undefined,
              horas: undefined,
            }
          : item
      )
    );
  };

  const onChangeAparatos = (id, Aparatos) => {
    const { label, potencia } = Aparatos;
    const id_aparato = Aparatos.id;
    setFormItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, aparato: label, potencia, id_aparato }
          : item
      )
    );
  };

  const onChangeHoras = (id, horas) => {
    setFormItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, horas: horas } : item))
    );
  };

  const onChangeDias = (id, dias) => {
    setFormItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, dias: dias } : item))
    );
  };

  const removeFormItem = (id) => {
    setFormItem((prev) => prev.filter((item) => item.id !== id));
    setFormKey((prev) => prev + 1);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col h-80">
      <h2>Informacion aparatros electricos</h2>
      <div className="form-container">
        <div className="form-dynamic" key={formKey}>
          {formItem.map((item, index) => (
            <div className="form-item" key={index}>
              <CustomSelect
                id={item.id}
                options={habitaciones}
                title="Habitaciones"
                onValueChange={onChangeHabitaciones}
                value={item.id_habitacion ?? ""}
              />
              <CustomSelect
                id={item.id}
                options={item.habitacion ? Aparatos[item.habitacion] : []}
                title="Aparatos"
                onValueChange={onChangeAparatos}
                disabled={!item.habitacion}
                value={item.id_aparato ?? ""}
              />
              <InputItem
                id={item.id}
                placeholder="Ingrese horas"
                label="Horas"
                max={24}
                disabled={!item.aparato}
                onChange={onChangeHoras}
                value={item.horas ?? ""}
              />
              <InputItem
                id={item.id}
                placeholder="Ingrese dias de uso"
                label="Dias/mes"
                max={31}
                disabled={!item.aparato}
                onChange={onChangeDias}
                value={item.dias ?? ""}
              />
              <Button
                variant="destructive"
                onClick={() => {
                  removeFormItem(item.id);
                }}
              >
                Borrar
              </Button>
            </div>
          ))}
        </div>
        <div className="form-item nuevo" onClick={addFormItem}>
          <span className="plus">
            <PlusIcon className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
});


export default DynamicForm;