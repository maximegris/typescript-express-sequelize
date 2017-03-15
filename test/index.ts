import { expect } from 'chai'
import { addTwo } from '../src/test'

describe('Testing demo function', () => {
  it('Should add two to input', () => {
    let input: number = 5
    let result = addTwo(input)
    expect(result).to.eq(input + 2)
  })
})
