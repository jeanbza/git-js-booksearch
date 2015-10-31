export default class FakeDispatcher {
  constructor(expectedCall, doneFunction, expectation) {
    this.expectedCall = expectedCall
    this.doneFunction = doneFunction
    this.expectation = expectation

    this.calls = 0
  }

  fakeDispatch(input) {
    if (this.calls == this.expectedCall) {
      this.expectation(input)
      this.doneFunction()
    }

    this.calls++
  }
}