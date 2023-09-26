import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import addToLocalStorage from "../../customHook/addToLocalStoreage";

const DonationDetails = () => {
    const [showDetail, setShowDetail] = useState([]);
    const [donation, setDonation] = useState([])
    const { id } = useParams();
    // console.log(id);
    // const loadData = useLoaderData()
    // console.log("after loading", loadData);

    useEffect(() => {
        fetch('../../../public/donation.json')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])

    useEffect(() => {
        // const findDonation = loadData?.find(donation => donation.id == id)
        const findDonation = donation?.find(donation => donation.id == id)
        // console.log("find item", findDonation);
        setShowDetail(findDonation);
    }, [id, donation])

    // console.log(showDetail);

    return (
        <div>
            <div className="py-4 font-bold text-center">Details for: {id}</div>
            <div className="w-8/12 mx-auto py">
                <img className="mx-auto w-full py-2" src={showDetail?.picture} alt="Img Loading" />
                <button className="block btn btn-primary" onClick={()=>{addToLocalStorage(showDetail)}}>Donate $ {showDetail?.price}</button>
                <h1 className="text-2xl  mx-auto">{showDetail?.title}</h1>
                <p className=" mx-auto">{showDetail?.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;