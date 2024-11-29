import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { RevenuModule } from './revenu/revenu.module';
import { Revenu } from './revenu/entities/revenu.entity';
// import { ExpenseModule } from './expense/expense.module';
// import { AccountModule } from './account/account.module';
import { DepenseModule } from './depense/depense.module';
import { Depense } from './depense/entities/depense.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Revenu, Depense],
      synchronize: true,
    }),

    UsersModule,
    LoginModule,
    RevenuModule,
    DepenseModule,
    // ExpenseModule,
    // AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
