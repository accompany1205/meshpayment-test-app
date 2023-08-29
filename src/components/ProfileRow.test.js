import React from 'react';
import { render } from '@testing-library/react';
import ProfileRow from './ProfileRow';

describe('ProfileRow Component', () => {
  const mockRowData = {
    avatar: 'avatar-url',
    name: 'John Doe',
    email: 'john@example.com',
    birthDay: '1990-01-01',
    address: '123 Main St',
    phoneNumber: '123-456-7890',
    password: '********',
  };

  test('renders correctly for desktop view', () => {
    // Mock window.innerWidth for desktop view
    global.innerWidth = 800;

    const { getByText } = render(<ProfileRow rowData={mockRowData} />);

    // Assertions for desktop view
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Birth Date')).toBeInTheDocument();
    expect(getByText('Address')).toBeInTheDocument();
    expect(getByText('Phone Number')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });

  test('renders correctly for mobile view', () => {
    // Mock window.innerWidth for mobile view
    global.innerWidth = 400;

    const { getByText, queryByText } = render(<ProfileRow rowData={mockRowData} />);

    // Assertions for mobile view
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Birth Date')).toBeInTheDocument();
    expect(getByText('Address')).toBeInTheDocument();
    expect(getByText('Phone Number')).toBeInTheDocument();
    expect(queryByText('Password')).toBeInTheDocument(); // Password should not be visible
  });

  afterEach(() => {
    // Restore the original window.innerWidth after each test
    delete global.innerWidth;
  });
});
