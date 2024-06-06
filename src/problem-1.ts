{
  //type assertion
  class SuccessServerStatus {
    constructor(public httpCode: number, public resultObject: Object) {}
  }
  class ErrorServerStatus {
    constructor(public httpCode: number, public message: string) {}
  }

  function getResult(response: SuccessServerStatus | ErrorServerStatus) {
    if (response.httpCode === 200) {
      return (<SuccessServerStatus>response).resultObject;
    } else {
      return (response as ErrorServerStatus).message;
    }
  }

  //
}
