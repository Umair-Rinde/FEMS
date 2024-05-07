import { Column, Table } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";

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
    
    @Column
    crops: string 

    @Column
    aboutYou: string
}