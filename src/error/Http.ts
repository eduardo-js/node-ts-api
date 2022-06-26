import ApiResponse from '../shared/responses';

export const ResourceNotFound = ApiResponse(404, {
  reason: 'Resource not found',
});

export const UnhandledException = ApiResponse(503, {
  reason: 'Unhandled exception',
});

export const ValidationError = ApiResponse(400);
