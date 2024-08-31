// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Delete/i));
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
