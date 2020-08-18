import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Header from './Header';
import Dropdowns from './Dropdowns';
import JobListings from './JobListings';
import './App.css';

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
  jobsLoading: boolean;
}

interface Ijob {
  id: number;
  title: string;
  offices: { id: number; name: string }[];
  department: { id: number; name: string };
}

class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      jobs: [],
      jobsFiltered: [],
      locationSelect: 'All Locations',
      departmentSelect: 'All Departments',
      jobsLoading: true,
    };
  }
  componentDidMount() {
    axios(
      'https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json'
    )
      .then((response) => {
        const data = response.data.jobs;
        this.setState({ jobsLoading: true }, () => {
          this.setState(
            { jobs: { ...data }, jobsFiltered: { ...data } },
            () => {
              this.setState({ jobsLoading: false }, () => {
                console.log(this.state.jobsFiltered, 'this.state.jobsFiltered');
              });
            }
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterData = () => {
    const locationSelect = this.state.locationSelect.toLowerCase();
    const departmentSelect = this.state.departmentSelect.toLowerCase();
    if (
      locationSelect === 'all locations' &&
      departmentSelect === 'all departments'
    ) {
      this.setState({ jobsFiltered: { ...this.state.jobs } });
    } else if (locationSelect === 'all locations') {
      let filteredData = this.state.jobs;

      filteredData = _.filter(filteredData, (job) => {
        return job.department.name.toLowerCase() === departmentSelect;
      });

      this.setState({ jobsFiltered: { ...filteredData } });
    } else if (departmentSelect === 'all departments') {
      const filteredByLocation = this.filterLocation(this.state.jobs);

      this.setState({ jobsFiltered: { ...filteredByLocation } });
    } else if (locationSelect === 'all locations') {
      const filteredByDepartment = this.filterDepartment(this.state.jobs);

      this.setState({ jobsFiltered: { ...filteredByDepartment } });
    } else {
      let filteredJobs = this.state.jobs;
      filteredJobs = this.filterLocation(filteredJobs);
      filteredJobs = this.filterDepartment(filteredJobs);
      this.setState({ jobsFiltered: { ...filteredJobs } });
    }
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
      <div className="App">
        <Header />
        <Dropdowns updateFilterSelection={this.updateFilterSelection} />
        <JobListings
          filteredJobData={this.state.jobsFiltered}
          jobsLoading={this.state.jobsLoading}
        />
      </div>
    );
  }
}

export default App;
