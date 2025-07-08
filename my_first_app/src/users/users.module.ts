import { Module } from '@nestjs/common';
import { log } from 'console';

@Module({})
export class UsersModule {
    constructor()
    {
        console.log("User module")
    }
}
