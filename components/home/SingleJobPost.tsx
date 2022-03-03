import Image from "next/image";
// import job_types from "../../data/job-types.json";

type SingleJobProps = {
  job: Job;
};

const SingleJobPost = (props: SingleJobProps) => (
  <div className="px-4 rounded-xl my-2">
    <div className="relative lg:max-w-5xl lg:mx-auto">
      {props.job.hot_job && (
        <div className="absolute -inset-2">
          <div
            className="w-full h-full mx-auto opacity-30 blur-lg filter"
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          >
            &nbsp;
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4  justify-items-start  p-6 bg-white relative rounded-xl border border-gray-100">
        <div className="place-self-center w-26 h-36 overflow-hidden hidden sm:block">
          <Image
            src="/assets/images/logo-placeholder.svg"
            className="object-cover"
            alt="Default Background"
            width={100}
            height={200}
          />
        </div>

        <div className="flex flex-col justify-center text-base mx-2">
          <h2>
            <a
              {...(props.job.apply_link
                ? {
                    href: props.job.apply_link,
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {
                    href: "#",
                  })}
              className="text-gray-700 whitespace-normal hover:text-sky-700 hover:underline"
            >
              {props.job.job_title}
            </a>
          </h2>
          <br />
          <h3 className="text-black">{props.job.company}</h3>
          <h3 className="text-gray-600">{props.job.address}</h3>
        </div>

        <div className="text-sm flex flex-col justify-around justify-self-center">
          <div>
            <span className="font-medium mb-1">Date Posted:</span>
            <br />
            <span className="text-gray-500">{props.job.date_posted}</span>
          </div>
          <div>
            <span className="font-medium">Job Type:</span>
            <br />
            <span className="text-gray-500">
              {props.job.job_type || ""}
            </span>
          </div>
        </div>

        <div className="justify-self-center flex flex-row items-center justify-center col-span-2 mt-2 sm:col-auto sm:mt-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>
          <span className="ml-2">Share</span>
        </div>
      </div>
    </div>
  </div>
);

export { SingleJobPost };
