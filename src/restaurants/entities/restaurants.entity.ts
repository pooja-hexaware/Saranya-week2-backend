import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RestaurantDocument =  Restaurant & Document;

@Schema() 
export class  Restaurant {
    
    @Prop({required:true})
     Restaurantname:string;

    @Prop()
    storeid:number;

}
export const  RestaurantSchema = SchemaFactory.createForClass( Restaurant);


