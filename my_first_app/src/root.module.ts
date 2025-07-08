import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { BookController } from './app.controller';



@Module({
  imports: [UsersModule, OrderModule],
  exports:[],
  controllers:[BookController]
  
})
export class RootModules {
  constructor(){
    console.log("App module")
  }
}
