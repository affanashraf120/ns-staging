import { useState } from 'react';

type JobFiltersProps = {
    onFiltersUpdated(filters: FilterUpdates): void
}

const allLocations = ['Sydney', 'Darwin', 'Brisbane', 'Adelaide', 'Hobart', 'Melbourne', 'Perth', 'Canberra']
const allNurseTypes = ['RN', 'AIN', 'CNC', 'CNE', 'ENS', 'EEN', 'EN', 'NE', 'NM', 'NUM', 'NP']
const FilterModal = (props: JobFiltersProps) => {
    const [show, setShow] = useState(false)
    const [filtersCount, setFiltersCount] = useState(0)

    const useArrayState = (state: Array<string>): [Array<string>, (s: string) => void, () => void] => {
        const [_innerState, _innerSetter] = useState(state)
        const setter = (value: string) => {
            if (_innerState.includes(value)) _innerSetter(_innerState.filter(s => s !== value))
            else _innerSetter([value, ..._innerState])
        }

        const clear = () => {
            _innerSetter([])
        }

        return [_innerState, setter, clear]
    }

    const [jobTypes, setJobType, clearJobTypes] = useArrayState([])
    const [locations, setLocations, clearLocations] = useArrayState([])
    const [nurseTypes, setNurseTypes, clearNurseTypes] = useArrayState([])

    const showResults = (e: any) => {
        e.preventDefault()
        setShow(false)
        setFiltersCount(jobTypes.length + locations.length + nurseTypes.length)
        props.onFiltersUpdated({ jobTypes, locations, nurseTypes })
    }

    const clearFilters = (e: any) => {
        e.preventDefault()
        clearJobTypes()
        clearLocations()
        clearNurseTypes()
        setFiltersCount(0)
        window.location.reload()
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5 px-5 lg:px-0 text-sm">
                <a
                    href="#"
                    className="rounded-full border border-gray-500 py-2 px-3"
                    onClick={() => setShow(true)}
                >
                    Job Filter (<strong>{filtersCount}</strong>)
                </a>
                <a href="#" onClick={clearFilters} className="rounded-full border border-gray-500 py-2 px-3">
                    Clear All
                </a>
            </div>

            {show ? (
                <div
                    className="fixed inset-0 h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-10">
                    <div className="w-full max-w-2xl">
                        <div
                            className="bg-gray-200 flex items-center justify-between py-4 px-5 border-b border-gray-300">
                            <h3 className="text-lg">Filters</h3>
                            <div className="flex items-center space-x-3">
                                <a
                                    href="#"
                                    onClick={clearFilters}
                                    className="px-4 text-sm py-2 rounded-full font-medium bg-gray-300"
                                >
                                    Clear
                                </a>
                                <a href="#" onClick={() => setShow(false)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-x"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-100 max-h-80 overflow-y-auto p-5 space-y-5">
                            <h3 className="text-lg font-medium">Employment Type</h3>
                            <div className="flex justify-between items-center">
                                <p>Part-time</p>
                                <input type="checkbox" name="part-time" className="h-5 w-5"
                                    checked={jobTypes.includes('Part-time')}
                                    onChange={() => setJobType('Part-time')} />
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Full-time</p>
                                <input type="checkbox" name="full-time" className="h-5 w-5"
                                    checked={jobTypes.includes('Full-time')}
                                    onChange={() => setJobType('Full-time')} />
                            </div>
                            <hr className="border-gray-300 my-5" />
                            <h3 className="text-lg font-medium">Location</h3>
                            {allLocations.map((location) => (
                                <div className="flex justify-between items-center" key={location}>
                                    <p>{location}</p>
                                    <input type="checkbox" name="locations" className="h-5 w-5"
                                        checked={locations.includes(location)}
                                        onChange={() => setLocations(location)} />
                                </div>
                            ))}

                            <hr className="border-gray-300 my-5" />

                            <h3 className="text-lg font-medium">Nurse Type</h3>
                            {allNurseTypes.map(nurseType => (
                                <div className="flex justify-between items-center" key={nurseType}>
                                    <p>{nurseType}</p>
                                    <input type="checkbox" name="nurse-type" className="h-5 w-5"
                                        checked={nurseTypes.includes(nurseType)}
                                        onChange={() => setNurseTypes(nurseType)} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-100 flex items-center justify-center py-3 border-t border-gray-300">
                            <a
                                href="#"
                                onClick={showResults}
                                className="rounded-md border py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 font-bold text-white"
                            >
                                Show Results
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div>&nbsp;</div>
            )}
        </div>
    );
};

export { FilterModal };
