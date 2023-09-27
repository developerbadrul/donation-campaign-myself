/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SingleDonation = ({ donation }) => {
    const navigate = useNavigate();

    const handleDonationDetail = () => {
        navigate(`/singledonation/${donation?.id}`);
    }

    const categoryBadgeStyle = {
        backgroundColor: donation?.category_bg_color,
    };

    const cardBodyStyle = {
        backgroundColor: donation?.card_bg_color,
    };

    return (
        <div onClick={handleDonationDetail} className="card bg-base-100 shadow-xl">
            <figure><img src={donation?.picture} alt="Loading Img" /></figure>
            <div className="card-body" style={cardBodyStyle}>
                <h2 className="card-title">
                    <div className="badge badge-secondary" style={categoryBadgeStyle}>
                        {donation?.category}
                    </div>
                </h2>
                <p>{donation?.title}</p>
            </div>
        </div>
    );
};

export default SingleDonation;
