import React from 'react';
import { render } from '@testing-library/react';
import ProfileList from './ProfileList';

// Mock the data that the component expects
jest.mock('../mock/profileData', () => [
    {
        id:1,
        avatar: '/avatars/1.jpg',
        name: "Cameron Williamson",
        email: "c@company.com",
        birthDay: '5/6/1992',
        address: "4140 Parker Rd, Allentown, New Mexico 31134",
        phoneNumber: '(889) 907-1960',
        password: "Myspace1"
    },
    {
        id:2,
        avatar: '/avatars/2.jpg',
        name: "Leslie Alexander",
        email: "l@company.com",
        birthDay: '23/7/1992',
        address: "1901 Thornridge Cir. Shiloh, Hawaii",
        phoneNumber: '(480) 555-0103',
        password: "Myspace2"
    }
]);

test('renders profile rows', () => {
  const { getByText, getAllByTestId } = render(<ProfileList />);
  
  // Check if profile data is rendered
  expect(getByText('Cameron Williamson')).toBeInTheDocument();
  expect(getByText('c@company.com')).toBeInTheDocument();
  // Can address and phoneNumber, password check

  expect(getByText('Leslie Alexander')).toBeInTheDocument();
  expect(getByText('l@company.com')).toBeInTheDocument();
  // Can address and phoneNumber, password check
  
  // Check if profile row borders are rendered
  const profileRowBorders = getAllByTestId('profile-row-border');
  expect(profileRowBorders.length).toBe(1); // There should be one border less than the number of profile rows
});
