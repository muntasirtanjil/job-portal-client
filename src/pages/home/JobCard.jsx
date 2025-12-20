import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, location, requirements,_id, salaryRange , description, company, company_logo } = job;
    return (
        <div className="card bg-base-200   shadow-sm">
            <div className='flex items-center justify-center gap-3'>
                <figure>
                    <img className='w-[40px] md:w-[60px]'
                        src={company_logo}
                    />
                </figure>
                <div className=''>
                    <h1 className='text-2xl font-bold'>{company}</h1>
                    <p className='flex items-center gap-1'> <IoLocationSharp size={18} /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Salary : {salaryRange.min} - {salaryRange.max } {salaryRange.currency}</p>
                <p>{description}</p>
                <div className='flex flex-wrap gap-1.5 my-2.5 '>
                    {
                        requirements.map((skill, index) =>
                            <button className="btn btn-outline "
                                key={index}
                            >{skill}</button>
                        )
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;