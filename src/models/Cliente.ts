import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { EnumType } from "typescript";

export class Cliente extends Model {
  public nombreCliente!: string;
  public direccionCliente!: string;
  public telefonoCliente!: string;
  public correoCliente!: string;
  public passwordCliente!: string;
  public estadoCliente!:EnumType;

}

export interface ClienteI {
    nombreCliente: string;
    direccionCliente: string;
    telefonoCliente: string;
    correoCliente: string;
    passwordCliente: string;
    estadoCliente: EnumType;
}

Cliente.init(
  {
    nombreCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccionCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefonoCliente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    correoCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    passwordCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },

      estadoCliente: {
        type: DataTypes.ENUM('Activo','Inactivo'),
        allowNull: false
      } 
  },
  {
    tableName: "clientes",
    sequelize: database,
    timestamps: true
  }
);