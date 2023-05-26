import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should be able to add numbers', () => {

    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract numbers', () => {
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const subtractButton = container.getByTestId('operator-subtract')
    fireEvent.click(subtractButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should be able to multiply numbers', () => {
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3)
    const multiplyButton = container.getByTestId('operator-multiply')
    fireEvent.click(multiplyButton)
    const button5 = container.getByTestId('number5')
    fireEvent.click(button5)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('15')
  })
  it('should be able to divide numbers', () => {
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(divideButton)
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should be able to concatenate numbers', () => {
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('1234')
  })
  it('should be able to chain multiple operations together', () => {
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton)
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const subtractButton = container.getByTestId('operator-subtract')
    fireEvent.click(subtractButton)
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('2')
  })
  it('should clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1')
    fireEvent.click(button1)
    const addButton = container.getByTestId('operator-add')
    fireEvent.click(addButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equalsButton = container.getByTestId('operator-equals')
    fireEvent.click(equalsButton)

    const clearButton = container.getByTestId('clear')
    fireEvent.click(clearButton)

    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual('0')
  })

})

