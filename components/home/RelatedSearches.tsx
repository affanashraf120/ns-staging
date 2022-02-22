const searches = [
  'Registered Nurse Jobs',
  'Enrolled Nurse Jobs',
  'Enrolled Nurse Jobs Melbourne',
  'Registered Nurse Jobs Adelaide',
  'Registered Nurse Jobs Sydney',
  'Enrolled Nurse Jobs Adelaide',
];

const RelatedSearches = () => (
  <div>
    <h4 className="text-2xl font-medium mb-5">Related Searches</h4>
    <div className="grid grid-cols-2 gap-6">
      {searches.map((search, i) => (
        <a
          href="#"
          key={i}
          className="flex items-center bg-gray-100 rounded-full py-4 px-6 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="block"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <span className="ml-4">{search}</span>
        </a>
      ))}
    </div>
  </div>
);

export { RelatedSearches };
