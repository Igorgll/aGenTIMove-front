import { Produtos } from "./Produto";
import { Usuario } from "./Usuario";

export class Compras{
  public id: number;
  public usuario: Usuario[];
  public produto: Produtos[];
  public data: Date;
}
