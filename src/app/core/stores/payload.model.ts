/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GenericPayload<T> {
  type: T;
  payload: any;
}
