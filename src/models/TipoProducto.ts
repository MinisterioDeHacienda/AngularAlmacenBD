import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";

export class TipoProducto extends Model {
    public TipoProductoId!:number;
    public name!: string;
}



export interface TipoProductoI {
    TipoProductoId:number;
    name: string;
}



TipoProducto.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

    },
    {
        tableName: "tipo_productos",
        sequelize: database,
        timestamps: true
    }
);

TipoProducto.hasMany(Producto)
Producto.belongsTo(TipoProducto)