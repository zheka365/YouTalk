import { countDown } from "../index.js";

describe("countDown", () => {
    it("счетчик уменьшеается от положительного числа", () => {
      const consoleLogSpy = jest.spyOn(console, 'log');
      countDown(3);
      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    })
  
    it("ошибка при отрицательном числе", () => {
      expect(() => countDown(-3));
    })
  
    it("ошибка если ввести не целое число", () => {
      expect(() => countDown(2.5));
    })
})
  
