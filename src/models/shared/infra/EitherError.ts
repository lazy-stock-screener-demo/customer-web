type EitherError<Error, Success> =
  | ErrorClass<Error, Success>
  | SuccessClass<Error, Success>;

class ErrorClass<Error, Success> {
  readonly result: Error;

  constructor(result: Error) {
    this.result = result;
  }

  isError(): this is ErrorClass<Error, Success> {
    return true;
  }

  isSuccess(): this is SuccessClass<Error, Success> {
    return false;
  }
}

class SuccessClass<Error, Success> {
  readonly result: Success;

  constructor(result: Success) {
    this.result = result;
  }

  isError(): this is ErrorClass<Error, Success> {
    return false;
  }

  isSuccess(): this is SuccessClass<Error, Success> {
    return true;
  }
}

const errorInstance = <Error, Success>(
  e: Error
): EitherError<Error, Success> => {
  return new ErrorClass<Error, Success>(e);
};

const successInstance = <Error, Success>(
  s: Success
): EitherError<Error, Success> => {
  return new SuccessClass<Error, Success>(s);
};

export { EitherError, errorInstance, successInstance };
