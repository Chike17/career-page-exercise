import React from 'react';
import './Dropdowns.css';
import { Dropdown } from 'semantic-ui-react';
import filterData from './filterData.json';
import axios from 'axios';
import _ from 'lodash';
const dropDownContext = React.createContext(undefined);
// pass data
// do animation for image and items

interface IProps {}

interface IState {
  locationSelect: string;
  departmentSelect: string;
  jobs: {
    id: number;
    title: string;
    offices: { id: number; name: string }[];
    department: { id: number; name: string };
  }[];
  jobsFiltered: {
    id: number;
    title: string;
    offices: { id: number; name: string }[];
    department: { id: number; name: string };
  }[];
}

interface Ijob {
  id: number;
  title: string;
  offices: { id: number; name: string }[];
  department: { id: number; name: string };
}

class Dropdowns extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      jobs: [],
      jobsFiltered: [],
      locationSelect: 'All Locations',
      departmentSelect: 'All Departments',
    };
  }
  componentDidMount() {
    axios(
      'https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json'
    )
      .then((response) => {
        let data = response.data.jobs;
        this.setState({ jobs: { ...data }, jobsFiltered: { ...data } });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterData = () => {
    const locationSelect = this.state.locationSelect.toLowerCase();
    const departmentSelect = this.state.departmentSelect.toLowerCase();
    let data;
    if (
      locationSelect === 'all locations' &&
      departmentSelect === 'all departments'
    ) {
      this.setState({ jobsFiltered: { ...this.state.jobs } }, () => {
        data = this.state.jobsFiltered;
      });
    } else if (locationSelect === 'all locations') {
      let filteredData = this.state.jobs;

      filteredData = _.filter(filteredData, (job) => {
        return job.department.name.toLowerCase() === departmentSelect;
      });

      this.setState({ jobsFiltered: { ...filteredData } }, () => {
        data = this.state.jobsFiltered;
      });
    } else if (departmentSelect === 'all departments') {
      const filteredByLocation = this.filterLocation(this.state.jobs);

      this.setState({ jobsFiltered: { ...filteredByLocation } }, () => {
        data = this.state.jobsFiltered;
      });
    } else if (locationSelect === 'all locations') {
      const filteredByDepartment = this.filterDepartment(this.state.jobs);

      this.setState({ jobsFiltered: { ...filteredByDepartment } }, () => {
        data = this.state.jobsFiltered;
      });
    } else {
      let filteredJobs = this.state.jobs;
      filteredJobs = this.filterLocation(filteredJobs);
      filteredJobs = this.filterDepartment(filteredJobs);
      this.setState({ jobsFiltered: { ...filteredJobs } }, () => {
        data = this.state.jobsFiltered;
      });
    }
    return data;
  };

  filterDepartment = (jobData: Ijob[]) => {
    const departmentSelect = this.state.departmentSelect.toLowerCase();
    let filteredData = this.state.jobs;

    filteredData = _.filter(jobData, (job) => {
      return job.department.name.toLowerCase() === departmentSelect;
    });
    return filteredData;
  };

  filterLocation = (jobData: Ijob[]) => {
    const locationSelect = this.state.locationSelect.toLowerCase();
    const newFilteredJobs: Ijob[] = [];

    _.forEach(jobData, (job) => {
      const offices = job.offices;
      for (let i = 0; i < offices.length; i++) {
        const office = offices[i].name.toLowerCase();
        if (office === locationSelect) {
          newFilteredJobs.push(job);
        }
      }
    });
    return newFilteredJobs;
  };

  updateFilterSelection = (
    e: React.SyntheticEvent<HTMLElement>,
    data: any,
    key: string
  ) => {
    this.setState({ [key]: data.value.toLowerCase() } as any, () => {
      this.filterData();
    });
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
                this.updateFilterSelection(e, target, 'departmentSelect');
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
                this.updateFilterSelection(e, target, 'locationSelect');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdowns;
