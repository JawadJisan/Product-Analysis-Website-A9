import React from 'react';
import useReview from '../../hooks/useReview';
import AdminReview from '../AdminReview/AdminReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <h1>Review: {review.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center'>
            {
                review.map(admins => (
                    // console.log(admins),
                    <AdminReview key={admins.id} admins={admins}/>
                    ))
            }
            </div>
        </div>
    );
};

export default Reviews;