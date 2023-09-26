/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const SingleDonation = ({ donation }) => {
    // console.log("single", donation);
    const navigate = useNavigate();
    
    
    const handaleDonationDetail = () =>{
        // console.log('working');
        navigate(`/singledonation/${donation.id}`)
    }
    return (
        <div onClick={handaleDonationDetail} className="card bg-base-100 shadow-xl">
            <figure><img src={donation.picture} alt="Loading Img" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-secondary">{donation.category}</div>
                </h2>
                <p>{donation.title}</p>
            </div>
        </div>
    );
};

export default SingleDonation;