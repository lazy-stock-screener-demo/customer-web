export class APIResult<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: T | string;
  private value: T;

  public constructor(isSuccess: boolean, error?: T | string | null, value?: T) {
    if (isSuccess && error) {
      throw new Error(
        "InvalidOperation: A API Result cannot be successful and contain an error"
      );
    }
    if (!isSuccess && !error) {
      throw new Error(
        "InvalidOperation: A failing Result needs to contain an error message"
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error as T;
    this.value = value as T;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      console.log(this.error);
      throw new Error(
        "Can't get the value of an error result. Try 'errorValue' instead."
      );
    }

    return this.value;
  }

  public errorValue(): T {
    return this.error as T;
  }

  public static ok<U>(value?: U): APIResult<U> {
    return new APIResult<U>(true, null, value);
  }

  public static fail<U>(error: U): APIResult<U> {
    return new APIResult<U>(false, error);
  }

  public static combine(results: APIResult<any>[]): APIResult<any> {
    for (let result of results) {
      if (result.isFailure) return result;
    }
    return APIResult.ok();
  }
}
