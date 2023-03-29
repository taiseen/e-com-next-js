{/* PAGINATION BUTTONS START */ }
{
    data.meta.pagination.total > maxResultCount && (
        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                disabled={pageIndex === 1}
                onClick={() => setPageIndex(pageIndex - 1)}
            >
                Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${data && data.meta.pagination.pageCount
                }`}</span>

            <button
                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                disabled={
                    pageIndex ===
                    (data && data.meta.pagination.pageCount)
                }
                onClick={() => setPageIndex(pageIndex + 1)}
            >
                Next
            </button>
        </div>
    )
}
{/* PAGINATION BUTTONS END */ }
{
    isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
        </div>
    )
}