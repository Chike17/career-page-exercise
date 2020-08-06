import React from 'react';
import './Dropdowns.css';
import { Dropdown } from 'semantic-ui-react';

const Dropdowns = () => {
  const departmentOptions = [
    {
      key: 'All Departments',
      text: 'All Departments',
      value: 'All Departments',
    },
    {
      key: 'Marketing',
      text: 'Marketing',
      value: 'Marketing',
    },
  ];

  const locationOptions = [
    {
      key: 'All Locations',
      text: 'All Locations',
      value: 'All Locations',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
    {
      key: 'New York',
      text: 'New York',
      value: 'New York',
    },
    {
      key: 'San Francisco',
      text: 'San Francisco',
      value: 'San Francisco',
    },
  ];

  return (
    <div className="dropdowns-container">
      <div className="departments">
        <div className="departments-title"> DEPARTMENT </div>
        <div className="departments-items">
          <Dropdown
            fluid
            selection
            options={departmentOptions}
            defaultValue={departmentOptions[0].value}
          />
        </div>
      </div>
      <div className="locations">
        <div className="locations-title"> LOCATION </div>
        <div className="locations-items">
          <Dropdown
            fluid
            selection
            options={locationOptions}
            defaultValue={locationOptions[0].value}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
