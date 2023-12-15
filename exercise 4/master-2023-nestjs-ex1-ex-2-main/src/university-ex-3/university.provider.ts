import { DataSource } from 'typeorm';
import { University } from './university.entity';

export const universityProviders = [
  {
    provide: 'UNIVERSITY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(University),
    inject: ['DATA_SOURCE'],
  },
];
