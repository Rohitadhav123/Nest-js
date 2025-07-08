import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [UsersModule, OrderModule],
  exports:[]
  
})
export class RootModules {
  constructor(){
    console.log("App module")
  }
}
