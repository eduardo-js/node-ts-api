export type IApiResponse = {
  status: number;
  data?: Record<string, any>;
};

const ApiResponse = (
    status: number,
    data?: Record<string, any>,
): IApiResponse => ({
  status,
  data,
});
export default ApiResponse;
