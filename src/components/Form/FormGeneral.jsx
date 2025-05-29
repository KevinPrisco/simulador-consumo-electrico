"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@simulador/components/ui/form";

import { Input } from "@simulador/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@simulador/components/ui/select";
import { Checkbox } from "@simulador/components/ui/checkbox";

import { ciudades, estratos } from "@simulador/utils/datos/helpers-datos";
import { Button } from "../ui/button";

export default function FormGeneral({ CalcularCosto }) {
  const form = useForm({
    defaultValues: {
      personas: "",
      estrato: "",
      ciudad: "",
      casaAntigua: false,
    },
  });

  function onSubmit() {
    CalcularCosto(form.getValues());
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="">Informacion general</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="form-general w-full"
        >
          {/* Personas en hogar */}
          <FormField
            control={form.control}
            name="personas"
            rules={{ required: "Ingresa el número de personas" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personas en el hogar</FormLabel>
                <FormControl>
                  <Input type="number" min={1} {...field} placeholder="Ej: 3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Estrato */}
          <FormField
            control={form.control}
            name="estrato"
            rules={{ required: "Selecciona un estrato" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Estrato</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona un estrato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Estratos</SelectLabel>
                        {estratos.map((e) => (
                          <SelectItem key={e.id} value={e.id.toString()}>
                            {e.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ciudad */}
          <FormField
            control={form.control}
            name="ciudad"
            rules={{ required: "Selecciona una ciudad" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Ciudades</SelectLabel>
                        {ciudades.map((c) => (
                          <SelectItem key={c.id} value={c.id.toString()}>
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Casa antigua */}
          <FormField
            control={form.control}
            name="casaAntigua"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  ¿La casa es antigua?
                </label>
              </FormItem>
            )}
          />

          <Button variant="secondary">Calcular</Button>
        </form>
      </Form>
    </div>
  );
}
