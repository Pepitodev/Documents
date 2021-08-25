import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [ProductsModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
