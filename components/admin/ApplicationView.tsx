

function ApplicationView() {
    return (
        <div className='w-full p-3 bg-white rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='text-xl font-semibold'>Job Applications</h3>
                <button className='px-3 rounded-xl border border-slate-400 flex items-center gap-3'>
                    <p className='font-medium'>This month</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="mt-5">
            </div>
        </div>
    )
}

export default ApplicationView