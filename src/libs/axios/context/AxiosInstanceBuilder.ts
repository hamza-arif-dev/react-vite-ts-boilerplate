import Axios, {
  AxiosInstance as AxiosInstanceType,
  AxiosInterceptorOptions,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";

export type AxiosInstance = AxiosInstanceType;
export type AxiosInstanceConfig<TRequestData = unknown> = AxiosRequestConfig<TRequestData>;

export type RequestInterceptor<TRequestData = unknown, TError = unknown> = {
  onFulfilled?: (
    value: InternalAxiosRequestConfig<TRequestData>
  ) =>
    | InternalAxiosRequestConfig<TRequestData>
    | Promise<InternalAxiosRequestConfig<TRequestData>>;
  onRejected?: (error: TError) => any | Promise<any>;
  options?: AxiosInterceptorOptions;
};

export type ResponseInterceptor<TData = unknown, TRequestData = unknown, TError = unknown> = {
  onFulfilled?: (
    value: AxiosResponse<TData, TRequestData>
  ) =>
    | AxiosResponse<TData, TRequestData>
    | Promise<AxiosResponse<TData, TRequestData>>;
  onRejected?: (error: TError) => any | Promise<any>;
  options?: AxiosInterceptorOptions;
};

export class AxiosInstanceBuilder<TData = unknown, TRequestData = unknown, TError = unknown> {
  private config: AxiosInstanceConfig<TRequestData>;
  private requestInterceptors: RequestInterceptor<TRequestData, TError>[] = [];
  private responseInterceptors: ResponseInterceptor<TData, TRequestData, TError>[] = [];

  constructor(config: AxiosInstanceConfig<TRequestData>) {
    this.config = config;
  }

  public withRequestInterceptor(
    onFulfilled?: RequestInterceptor<TRequestData, TError>["onFulfilled"],
    onRejected?: RequestInterceptor<TRequestData, TError>["onRejected"],
    options?: RequestInterceptor<TRequestData, TError>["options"]
  ): this {
    this.requestInterceptors.push({ onFulfilled, onRejected, options });
    return this;
  }

  public withResponseInterceptor(
    onFulfilled?: ResponseInterceptor<TData, TRequestData, TError>["onFulfilled"],
    onRejected?: ResponseInterceptor<TData, TRequestData, TError>["onRejected"],
    options?: ResponseInterceptor<TData, TRequestData, TError>["options"]
  ): this {
    this.responseInterceptors.push({ onFulfilled, onRejected, options });
    return this;
  }

  public build(): AxiosInstance {
    const instance = Axios.create(this.config);

    this.requestInterceptors.forEach(({ onFulfilled, onRejected, options }) => {
      instance.interceptors.request.use(onFulfilled, onRejected, options);
    });

    this.responseInterceptors.forEach(({ onFulfilled, onRejected, options }) => {
      instance.interceptors.response.use(onFulfilled, onRejected, options);
    });

    return instance;
  }
}
