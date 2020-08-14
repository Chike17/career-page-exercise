import React from 'react';
import './JobListings.css';
import _ from 'lodash';
import filterData from './filterData.json';
// map the data to use for options
// import { Label, Icon } from 'semantic-ui-react';

// const JobListings = (props: any) => {
//   console.log(props.filteredJobData, 'props.filteredJobData');
//   return (
//     <div>
//       {_.map(props.filteredJobData, () => {})}
//       {/* <div className="department-type">
//         <img className="eng-image" src="/assets/engineering.png" alt="Error" />
//         <div className="department-title"> Engineering </div>
//       </div>
//       <div className="job-listings-container">
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//       </div>
//       <div className="department-type">
//         <img className="eng-image" src="/assets/engineering.png" alt="Error" />
//         <div className="department-title"> Engineering </div>
//       </div>
//       <div className="job-listings-container">
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//       </div>
//       <div className="department-type">
//         <img className="eng-image" src="/assets/engineering.png" alt="Error" />
//         <div className="department-title"> Engineering </div>
//       </div>
//       <div className="job-listings-container">
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco </div>
//           <div className="role"> Backend Engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, Remote </div>
//           <div className="role"> Backend Engineer, data</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//         <div className="info">
//           <div className="break">___________________________</div>
//           <div className="city"> San Francisco, New York </div>
//           <div className="role"> Full-stack engineer</div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

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
  }
  generateDepartmentUI = (department: string) => {
    const departmentDisplay = (
      <div>
        <div className="department-type">
          <img
            className="eng-image"
            src="/assets/engineering.png"
            alt="Error"
          />
          <div className="department-title"> {department} </div>
        </div>
      </div>
    );

    const jobsDisplay: any = [];
    _.forEach(this.props.filteredJobData, (job) => {
      if (job.department.name.toLowerCase() === department) {
        jobsDisplay.push(
          <div className="info">
            <div className="break">___________________________</div>
            <div className="city"> {job.offices.toString()} </div>
            <div className="role"> {job.title}</div>
          </div>
        );
      }
    });

    return (
      <div className="job-listings-container">
        {departmentDisplay}
        {jobsDisplay}
      </div>
    );

    // <div>
    //   <div className="department-type">
    //     <img className="eng-image" src="/assets/engineering.png" alt="Error" />
    //     <div className="department-title"> {department} </div>
    //   </div>
    // </div>;

    //     <div className="department-type">
    //   <img className="eng-image" src="/assets/engineering.png" alt="Error" />
    //   <div className="department-title"> Engineering </div>
    // </div>
    // <div className="job-listings-container">
    //   <div className="info">
    //     <div className="break">___________________________</div>
    //     <div className="city"> San Francisco </div>
    //     <div className="role"> Backend Engineer</div>
    //   </div>
    //   <div>
  };
  render() {
    return <div></div>;
  }
}

export default JobListings;
