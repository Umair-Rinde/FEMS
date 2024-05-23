import { Column, DataType, ForeignKey, HasMany, HasOne, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { Crops } from "../crops/crops.model";
import { User } from "src/modules/user/users/models/user.model";
import { Plots } from "../plot/plot.model";

@Table({
    tableName:'Farmers',
    paranoid:true
})
export class FarmerInfo extends MyBaseModel{

    @Column
    state: string 

    @Column
    pinCode: string

    @Column
    districts: string
    
    @Column
    region :string
    
    @HasMany(()=>Crops)
    crops: Crops[]

    @HasMany(()=>Plots)
    plots: Plots[]

    @Column({
        type:DataType.TEXT
    })
    aboutYou: string

    @ForeignKey(()=>User)
    userId:string

}