import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    // Setting the ConfigModule.forRoot({ isGlobal: true }) to isGlobal: true
    //  will make the.env properties available throughout the application.
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,//for making database to all services
    UsersModule, AuthModule, PostsModule, 
  ]
})
export class AppModule {}
