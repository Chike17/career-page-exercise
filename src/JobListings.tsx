import React from 'react';
import './JobListings.css';
import _ from 'lodash';
import filterData from './filterData.json';
import * as utils from './utils/utils';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const departmentOptions = utils.mapFilterOptions(filterData.departmentOptions);

interface IState {}

interface IProps {
  filteredJobData: {
    id: number;
    title: string;
    offices: { id: number; name: string }[];
    department: { id: number; name: string };
  }[];
  jobsLoading: boolean;
}

class JobListings extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      jobListEmpty: false,
    };
  }

  generateDepartmentTitle = (department: string) => {
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

    if (!jobsDisplay.length) return null;

    return (
      <div className="job-section">
        {this.generateDepartmentTitle(department)}
        <div className="job-listings-container">{jobsDisplay}</div>
      </div>
    );
  };

  loader = () => {
    return (
      <Segment basic>
        <div className="job-listings-container">
          <Dimmer active inverted inline>
            <Loader inverted />
          </Dimmer>
        </div>
      </Segment>
    );
  };

  render() {
    if (this.props.jobsLoading) {
      return this.loader();
    }

    let departmentUI = _.map(departmentOptions, (departmentOption) => {
      return this.generateDepartmentUI(departmentOption);
    });

    departmentUI = _.sortBy(departmentUI, (element) => {
      if (element) {
        return -element.props.children[1].props.children.length;
      }
    });

    departmentUI = _.compact(departmentUI);

    if (!departmentUI.length) {
      return (
        <div className="no-result">
          There are no search results for your filter
        </div>
      );
    }

    return <div className="department-container">{departmentUI}</div>;
  }
}

export default JobListings;
