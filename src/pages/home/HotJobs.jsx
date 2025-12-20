import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/job')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'> Jobs of the day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 items-center justify-center'>

                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;