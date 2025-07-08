import { Module } from '@nestjs/common';

@Module({})
export class OrderModule {
    constructor()
    {
        console.log("Order Module")
    }
}
