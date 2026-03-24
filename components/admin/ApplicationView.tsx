
import { AdminPieChart } from "./charts/AdminPieChart"
import { LineChartCom } from "./charts/LineChartCom"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function ApplicationView() {
    return (
        <div className='w-full p-3 bg-white rounded-xl shadow-xl'>
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
                <LineChartCom />
            </div>
            <div className="flex gap-2 w-full p-2">
                <div className="w-3/5 shadow-xl mt-2 p-2">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold">Pending Approvals</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Job title</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell>Backend deve</TableCell>
                                    <TableCell>
                                        <button className="border border-green-700 px-1 rounded-xl text-green-800">Approve</button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">INV021</TableCell>
                                    <TableCell>Designer</TableCell>
                                    <TableCell>
                                        <button className="border border-red-700 px-2 rounded-xl text-red-800">Reject</button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="w-2/5 p-2">
                    <h3 className="text-xl font-semibold">Statistics</h3>
                    <div className="w-full">
                        <AdminPieChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationView