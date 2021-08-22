import getRandomIntNumber from "./getRandomInt"

describe("getRandomIntNumber helper", () => {
  it("should generate a random int number", () => {
    let array01 = [0, 1]

    let array09 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    let randomNumber01 = getRandomIntNumber(0, 2)

    let randomNumber09 = getRandomIntNumber(0, 9)

    expect(array01).toContain(randomNumber01)

    expect(array09).toContain(randomNumber09)
  })
})
