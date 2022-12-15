import { IIndicator } from "./indicator.interface";

export interface IResult {
  version: string,
  autor: string,
  fecha: string,
  uf: IIndicator,
  ivp: IIndicator,
  dolar: IIndicator,
  dolar_intercambio: IIndicator,
  euro: IIndicator,
  ipc: IIndicator,
  utm: IIndicator,
  imacec: IIndicator,
  tpm: IIndicator,
  libra_cobre: IIndicator,
  tasa_desempleo: IIndicator,
  bitcoin: IIndicator
}