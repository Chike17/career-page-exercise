import React from 'react';
import './Dropdowns.css';
import { Dropdown } from 'semantic-ui-react';
import filterData from './filterData.json';
import 'semantic-ui-css/semantic.min.css';

const Dropdowns = (props: any) => {
  return (
    <div className="dropdowns-container">
      <div className="departments">
        <div className="departments-title">DEPARTMENT </div>
        <div className="departments-items">
          <Dropdown
            fluid
            selection
            options={filterData.departmentOptions}
            defaultValue={filterData.departmentOptions[0].value}
            onChange={(e, target) => {
              props.updateFilterSelection(e, target, 'departmentSelect');
            }}
          />
        </div>
      </div>
      <div className="locations">
        <div className="locations-title"> LOCATION </div>
        <div className="locations-items">
          <Dropdown
            fluid
            selection
            options={filterData.locationOptions}
            defaultValue={filterData.locationOptions[0].value}
            onChange={(e, target) => {
              props.updateFilterSelection(e, target, 'locationSelect');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
