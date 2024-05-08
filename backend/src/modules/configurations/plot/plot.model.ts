import { Column, ForeignKey, HasMany, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { FarmerInfo } from "../farmerInfo/farmerinfo.model";
import { Crops } from "../crops/crops.model";

@Table({
    tableName:'plots',
    paranoid:true
})
export class Plots extends MyBaseModel{

    @Column
    state: string 
    
    @Column
    district :string
    
    @Column
    region: string 

    @Column
    @ForeignKey(()=>FarmerInfo)
    farmerId:string

    @HasMany(()=>Crops)
    crops:Crops[]
}