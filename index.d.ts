type Job = {
  id: string;
  job_title: string;
  address: string;
  company: string;
  date_posted: string;
  job_type: string;
  hot_job: boolean;
  apply_link: string;
};

type FilterUpdates = {
  jobTypes: Array<string>;
  locations: Array<string>;
  nurseTypes: Array<string>;
};

type SearchModalProps = {
  onSearch: (string) => void;
};

type HomePageProps = {
  // jobList: [JobType];
  // total: number;
  // conditions: string;
  jobs:Job[],
  count:number,
};
