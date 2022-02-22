type JobType = {
  id: string;
  jobTitle: string;
  location: string;
  company: string;
  datePosted: string;
  jobType: string;
  hotJob: string;
  address: string;
  link?: string;
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
  jobList: [JobType];
  total: number;
  conditions: string;
};
