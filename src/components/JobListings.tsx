import React from 'react';
import '../styles/JobListings.scss';
import _ from 'lodash';
import filterData from '../filterData.json';
import * as utils from '../utils/utils';
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
  }

  generateDepartmentTitle = (department: string) => {
    let departmentIcon;
    if (department === 'Marketing') departmentIcon = 'marketing';
    if (department === 'Engineering') departmentIcon = 'engineering';
    if (department === 'Customer Success') departmentIcon = 'customer-success';

    return (
      <div>
        <div className="department-title">
          <img
            className="department-title-image"
            src={`/assets/${departmentIcon}.png`}
            alt="Error"
          />
          <div className="department-title-name"> {department} </div>
        </div>
      </div>
    );
  };

  generateDepartmentUI = (department: string, departmentIndex: number) => {
    const jobsDisplay: any = [];
    let divPushCount = 0;

    _.forEach(this.props.filteredJobData, (job, index) => {
      const offices = _.map(job.offices, (office) => {
        return office.name;
      });
      let depHighlightSelect = '';
      if (!divPushCount) {
        depHighlightSelect = department.toLowerCase().split(' ').join('-');
      }
      if (job.department.name.toLowerCase() === department.toLowerCase()) {
        jobsDisplay.push(
          <a
            href={`https://airtable.com/jobs/${job.id}`}
            key={index}
            className="job-info"
          >
            <div
              className={`job-info-break job-info-break-${depHighlightSelect
                .toLowerCase()
                .split(' ')
                .join('-')}`}
            >
              ________________________________________________________
            </div>
            <div className="job-info-city"> {offices.join(', ')} </div>
            <div className="job-info-role"> {job.title}</div>
          </a>
        );
        divPushCount++;
      }
    });

    if (!jobsDisplay.length) return null;

    return (
      <div key={departmentIndex} className="job-section">
        {this.generateDepartmentTitle(department)}
        <div className="job-listings-container">{jobsDisplay}</div>
      </div>
    );
  };

  loader = () => {
    return (
      <div className="loader-container">
        <Segment basic>
          <Dimmer active inverted inline={'true'}>
            <Loader inverted />
          </Dimmer>
        </Segment>
      </div>
    );
  };

  render() {
    if (this.props.jobsLoading) {
      return this.loader();
    }

    let departmentUI = _.map(departmentOptions, (departmentOption, index) => {
      return this.generateDepartmentUI(departmentOption, index);
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
