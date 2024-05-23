import { Column, ForeignKey, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { FarmerInfo } from "../farmerInfo/farmerinfo.model";
import { Plots } from "../plot/plot.model";

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
    @ForeignKey(()=> Plots)
    plotId:string 

    @Column
    @ForeignKey(()=>FarmerInfo)
    farmerId:string
}