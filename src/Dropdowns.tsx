import React from 'react';
import './Dropdowns.css';
import { Dropdown } from 'semantic-ui-react';
import filterData from './filterData.json';
import axios from 'axios';
const dropDownContext = React.createContext(undefined);

class Dropdowns extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      jobs: [],
      location: '',
      department: '',
    };
  }
  componentDidMount() {
    axios(
      'https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json'
    )
      .then((response) => {
        this.setState({ jobs: response.data.jobs });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  filterByDepartment = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any,
    key: string
  ) => {
    console.log(data.value, '!!!!!!');
  };
  filterByLocation = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any,
    key: string
  ) => {
    console.log(data.value, '!!!!!!');
  };

  render() {
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
                this.filterByDepartment(e, target, 'department');
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
                this.filterByDepartment(e, target, 'department');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdowns;
