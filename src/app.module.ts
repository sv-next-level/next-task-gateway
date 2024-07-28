import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import defaultConfiguration from "@/config";
import nestConfiguration, { validate } from "@/nestjs/config";

import { MongooseDatabaseModule } from "@/nestjs/db/mongo/database.module";
import { MongooseModelsModule } from "@/nestjs/db/mongo/mongoose-models.module";

// import { RedisDatabaseModule } from "@/nestjs/db/redis/database.module";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [...defaultConfiguration, ...nestConfiguration],
      expandVariables: true,
      isGlobal: true,
      cache: true,
      validate,
    }),
    // RedisDatabaseModule,
    MongooseModelsModule,
    MongooseDatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
