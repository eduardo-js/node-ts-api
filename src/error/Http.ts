export const ResourceNotFound = {
  status: 404,
  data: {reason: 'Resource not found'},
};

export const ValidationError = {
  status: 400,
};

export const UnhandledException = {
  status: 503,
  data: {reason: 'Unhandled exception'},
};
