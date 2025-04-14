import { Module } from '@nestjs/common';
import { CacheModule, CacheModuleOptions } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { Pokemon } from './pokemon/entities/pokemon.entity';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { GlobalHttpModule } from './http.module';

@Module({
  imports: [
    CacheModule.register<CacheModuleOptions>({
      isGlobal: true,
      ttl: 5000,
      max: 10,
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Pokemon],
        synchronize: true,
      }),
    }),
    PokemonModule,
    GlobalHttpModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
