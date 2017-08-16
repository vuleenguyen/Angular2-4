/* tslint:disable:no-unused-variable */

import { ReversePipe } from "app/shared/reverse.pipe";

describe("Pipe: ReversePipe", () => {
  it("test reverse pipe", () => {
    let reverse = new ReversePipe();
    expect(reverse.transform("Hello")).toEqual("olleH");
  })
})