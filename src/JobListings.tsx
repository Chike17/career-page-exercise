import React from 'react';
import './JobListings.css';
import _ from 'lodash';
import filterData from './filterData.json';
import * as utils from './utils/utils';

const departmentOptions = utils.mapFilterOptions(filterData.departmentOptions);

interface IState {}

interface IProps {
  filteredJobData: {
    id: number;
    title: string;
    offices: { id: number; name: string }[];
    department: { id: number; name: string };
  }[];
}

class JobListings extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      jobListEmpty: false,
    };
  }

  generateDepartmentTitle = (department: string) => {
    if (department === 'All Departments') return;
    let departmentIcon;

    if (department === 'Marketing') departmentIcon = 'marketing';
    if (department === 'Engineering') departmentIcon = 'engineering';
    if (department === 'Customer Success') departmentIcon = 'customer-success';

    return (
      <div>
        <div className="department-type">
          <img
            className="eng-image"
            src={`/assets/${departmentIcon}.png`}
            alt="Error"
          />
          <div className="department-title"> {department} </div>
        </div>
      </div>
    );
  };

  generateDepartmentUI = (department: string) => {
    const jobsDisplay: any = [];
    _.forEach(this.props.filteredJobData, (job) => {
      const offices = _.map(job.offices, (office) => {
        return office.name;
      });
      if (job.department.name.toLowerCase() === department.toLowerCase()) {
        jobsDisplay.push(
          <div className="info">
            <div className="break">___________________________</div>
            <div className="city"> {offices.join(', ')} </div>
            <div className="role"> {job.title}</div>
          </div>
        );
      }
    });

    if (!jobsDisplay.length) return;

    return (
      <div>
        {this.generateDepartmentTitle(department)}
        <div className="job-listings-container">{jobsDisplay}</div>{' '}
      </div>
    );
  };

  render() {
    return (
      <div>
        {_.map(departmentOptions, (option) => {
          return this.generateDepartmentUI(option);
        })}
      </div>
    );
  }
}

export default JobListings;
