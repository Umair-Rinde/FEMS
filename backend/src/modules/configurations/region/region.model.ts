import { Column, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";

@Table({
    tableName:'regions',
    paranoid:true
})
export class Region extends MyBaseModel{

    @Column
    state: string 
    
    @Column
    district :string
    
    @Column
    region: string 
}