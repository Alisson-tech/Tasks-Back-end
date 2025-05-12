import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { PaginationParams, PaginatedResult } from './paginate.types';

export async function paginate<T extends ObjectLiteral>(
  queryBuilder: SelectQueryBuilder<T>,
  params: PaginationParams
): Promise<PaginatedResult<T>> {
  const { page, limit } = params;
  const skip = (page - 1) * limit;

  const [data, total] = await queryBuilder
    .skip(skip)
    .take(limit)
    .getManyAndCount();

  return {
    data,
    total,
    page,
    limit,
  };
}
