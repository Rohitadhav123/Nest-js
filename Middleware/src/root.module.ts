

import { Module } from "@nestjs/common";
@Module({
  imports: [],
  exports:[],
 
  
})
export class RootModules {
  constructor(){
    console.log("App module")
  }
}