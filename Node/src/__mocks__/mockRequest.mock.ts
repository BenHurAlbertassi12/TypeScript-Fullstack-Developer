import { Request } from 'express';
import { Params, Query } from 'express-serve-static-core';

export const makeMockRequest = ({
  params,
  query,
}: {
  params?: Params;
  query?: Query;
}): Request => {
  const request = {
    params: params || {},
    query: query || {},
  } as unknown;
  return request as Request;
};
