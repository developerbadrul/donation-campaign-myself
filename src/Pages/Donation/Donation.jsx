import { useEffect, useState } from "react";
import DonatedDetails from "../DonatedDetails/DonatedDetails";

const Donation = () => {
    const [showDonations, setShowDonations] = useState([]);
    const [noFound, setNofound] = useState("")
    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("donated"));
        if (getItem) {
            setShowDonations(getItem)
        } else {
            setNofound("No Donatation Add")
        }
    }, [])

    console.log(showDonations);
    return (
        <div>
            <h1 className="text-xl">Donation</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto">
                {
                    showDonations.map(x=> <DonatedDetails key={x.id} donated={x}></DonatedDetails>)
                }
            </ul>
        </div>
    );
};

export default Donation;