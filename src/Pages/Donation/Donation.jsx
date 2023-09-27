import { useEffect, useState } from "react";
import { DonatedDetails } from "../DonatedDetails/DonatedDetails";

const Donation = () => {

    const [showDonations, setShowDonations] = useState([]);
    const [noFound, setNofound] = useState("")
    const [moreData, setMoreData] = useState(false)
    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("donated"));
        if (getItem) {
            setShowDonations(getItem)
        } else {
            setNofound("No Donatation Add")
        }
    }, [])

    const handleReset = () =>{
        localStorage.clear();
        setShowDonations([])
        setNofound('No Donatation Add')
    }

    return (

        noFound ? <div className="text-center font-bold text-xl">No Donation Added</div> : <div>
            <div className="flex justify-center items-center gap-3 font-semibold">
                <h1 className="text-xl text-center font-bold">Your Donation List</h1>
                <button className="bg-cyan-300 p-3 rounded-xl btn" onClick={handleReset}>Clear All</button>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto">
                {
                    moreData ? showDonations?.map(x => <DonatedDetails key={x?.id} donated={x}></DonatedDetails>)
                    : showDonations?.slice(0,4).map(x => <DonatedDetails key={x?.id} donated={x}></DonatedDetails>)
                }
            </ul>
            {
                 <div>
                    <button className={`bg-cyan-300 p-3 rounded-xl btn mx-auto block mt-3 ${(showDonations.length > 4)} ? "block" : "hidden"`} onClick={()=> setMoreData(!moreData)}>{moreData ? "less Show" : "Show More"}</button>
                 </div>
            }

        </div>

        

    );

};

export default Donation;