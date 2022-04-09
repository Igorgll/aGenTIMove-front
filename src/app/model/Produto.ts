import { Compras } from "./Compras";

export class Produtos{
  public id: number;
  public servico: string
  public descricao: string;
  public valor: number;
  public categoria: string;
  public equipamentos: string;
  public equipDescricao: string;
  public urlImagem: string;
  public compras: Compras[];
}
