import {useState} from 'react';

const suggestedSearch = [
    'Aged Care',
    'Registered nurse jobs',
    'Melbourne Nurse practioner',
    'Full time',
    'Emergency department',
    'Sydney',
    'enrolled nurse',
];

const SearchModal = (props: SearchModalProps) => {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchQueryChanged = (e: any) => setSearchQuery(e.target.value)
    const submitSearch = (e: any) => {
        e.preventDefault()
        props.onSearch(searchQuery)
        setShow(false)
    }

    return (
        <div>
            <div className="w-full px-3 lg:px-0 lg:max-w-3xl mt-5 lg:mx-auto cursor-pointer">
                <form onSubmit={submitSearch} className="relative w-full">
                    <input
                        type="text"
                        value={searchQuery}
                        name="search"
                        onChange={handleSearchQueryChanged}
                        className="rounded-full border border-gray-400 w-full py-4 pl-14"
                        placeholder="Search"
                    />
                    <div className="absolute inset-y-0 left-5 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="block"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </form>
            </div>

            {show ? <div className="fixed inset-0 h-full bg-white flex flex-col justify-center bg-white z-10">
                <a
                    href="#"
                    className="absolute top-5 right-5"
                    onClick={() => setShow(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </a>

                <form onSubmit={submitSearch} className="relative w-full max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        name="search"
                        onChange={handleSearchQueryChanged}
                        className="rounded-full border border-gray-400 w-full max-w-2xl py-4 pl-14"
                        placeholder="Search"
                    />
                    <div className="absolute inset-y-0 left-5 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="block"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </form>

                <div className="container mx-auto max-w-6xl mt-10">
                    <h3 className="text-xl font-bold mb-5">Top Trending Searches</h3>
                    <div className="grid grid-cols-7 gap-4">
                        {suggestedSearch.map((search: string, i) => {
                            return (
                                <a
                                    href="#"
                                    key={i}
                                    className="rounded-full border border-gray-400 py-2 px-4 truncate text-center"
                                >
                                    <span className="">{search}</span>
                                </a>
                            );
                        })}
                    </div>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="px-4 text-sm py-3 rounded-full font-medium bg-gray-200"
                        >
                            Clear
                        </a>
                    </div>
                </div>
            </div> : <div>&nbsp;</div>}
        </div>
    );
};

export {SearchModal};
