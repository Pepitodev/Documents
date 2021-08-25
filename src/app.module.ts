import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [ProductsModule, UsersModule,TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'test',
    username:'root',
    synchronize: true,
    logging: false,
    entities: [Product,User],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
