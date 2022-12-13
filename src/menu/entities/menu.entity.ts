import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MenuDocument = Menu & Document;

@Schema() 
export class Menu {
    
    @Prop({required:true})
    menuname:string;

    @Prop({required:true})
    menudesc: string; 

    @Prop()
    price : number;

    @Prop()
    toppings:string[];

    @Prop()
    storeid:number;

}
export const MenuSchema = SchemaFactory.createForClass(Menu);


