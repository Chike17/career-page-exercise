import _ from 'lodash';

export const mapFilterOptions = (options) => {
  return _.map(options, (option) => {
    return option.value;
  });
};
