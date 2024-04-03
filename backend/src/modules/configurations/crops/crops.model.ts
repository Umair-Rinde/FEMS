import { Column, ForeignKey, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { Region } from "../region/region.model";

@Table({
    tableName:'crops',
    paranoid:true
})
export class Crops extends MyBaseModel{
    @Column
    name:string

    @Column
    image:string

    @Column
    description:string

    @Column
    @ForeignKey(()=> Region)
    regionId:string 
}