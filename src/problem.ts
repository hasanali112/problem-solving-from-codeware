{
  //type assertion
  class SuccessServerStatus {
    constructor(public httpCode: number, public resultObject: Object) {}
  }
  class ErrorServerStatus {
    constructor(public httpCode: number, public message: string) {}
  }

  function getResult(response: SuccessServerStatus) {
    if (response.httpCode === 200) {
      return response.resultObject;
    } else {
      let result = response as any;
      return (<ErrorServerStatus>result).message;
    }
  }

  //
}
