import React from 'react';
import Counter from '../components/Counter/Counter.component';
import {fireEvent, getByTestId, render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// REACT TESTING LIBRARY
// ---------------------

//Suite 
describe('Counter Component Tests', ()=> {
    let getByTestId; // declare global scope

// Before
beforeEach(()=> {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

// After
afterEach(()=>{
    cleanup(); // actually run by default
})

test('Header elem test', ()=>{
    const headerEl = getByTestId('header');
    expect(headerEl.textContent).toBe('COUNTER');
})

test('counter starts at zero', ()=>{
    // const { getByTestId } = render(<Counter />);
    const countEl = getByTestId('count');
    expect(countEl.textContent).toBe('0');

})

test('input value = 1', ()=> {
    // const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');
})

test('add button label is +', ()=> {
    // const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe('+');
    
})

test('subtract button label is +', ()=> {
    // const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId('subtract-btn');
    expect(subtractBtn.textContent).toBe('-');
    
})

test('check change value of input', ()=>{
    // const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId('input');
    fireEvent.change(inputEl, {
        target: {value:5}
    });

    expect(inputEl.value).toBe('5');
})

test('click on add-btn +1', ()=> {
    // const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId('add-btn');
    const countEl = getByTestId('count');

    expect(countEl.textContent).toBe('0');
    
    fireEvent.click(addBtn);

    expect(countEl.textContent).toBe('1');
})

test('click on subtract-btn -1', ()=> {
    // const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId('subtract-btn');
    const countEl = getByTestId('count');
    expect(countEl.textContent).toBe('0');
    fireEvent.click(subtractBtn);

    expect(countEl.textContent).toBe('-1');
})


test('change input value and then click add btn', ()=> {
    // const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId('add-btn');
    const inputEl = getByTestId('input');
    const countEl = getByTestId('count');

    expect(countEl.textContent).toBe('0');

    fireEvent.change(inputEl, {
        target: {value: 5}
    });

    fireEvent.click(addBtn);

    expect(countEl.textContent).toBe('5');
})

test('change input value and then click subtract btn', ()=> {
    // const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId('subtract-btn');
    const inputEl = getByTestId('input');
    const countEl = getByTestId('count');

    expect(countEl.textContent).toBe('0');

    fireEvent.change(inputEl, {
        target: {value: -5}
    });

    fireEvent.click(subtractBtn);

    expect(countEl.textContent).toBe('5');
})


test('change in counter color if > 100', ()=>{
    // const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId('add-btn');
    const inputEl = getByTestId('input');
    const countEl = getByTestId('count');
    // check no color at start
    expect(countEl.className).toBe('');

    fireEvent.change(inputEl, {
        target: {value: 50}
    });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    expect(countEl.className).toBe('green');


})

test('change in counter color if < 100', ()=>{
    // const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId('subtract-btn');
    const inputEl = getByTestId('input');
    const countEl = getByTestId('count');
    // check no color at start
    expect(countEl.className).toBe('');

    fireEvent.change(inputEl, {
        target: {value: 50}
    });

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(countEl.classList.contains('red') ).toBe(true);


})

})