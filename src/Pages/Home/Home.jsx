import { useEffect, useState } from "react";
import SingleDonation from "../../components/SingleDonation/SingleDonation";

const Home = () => {
    const [donations, setDonations] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDonations, setFilteredDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setDonations(data);
                setFilteredDonations(data); // Initialize filteredDonations with all donations
            });
    }, []);

    const handleSearch = () => {
        // Filter donations based on the searchQuery
        const filtered = donations.filter(donation => {
            return donation.category.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredDonations(filtered);
    };

    return (
        <>
            <div className="w-full bg-[url('https://i.ibb.co/K6T11QX/banner.jpg')] h-72 bg-center bg-cover">
                <h1 className="text-3xl text-center text-white font-bold py-5">I Grow By Helping People In Need</h1>
                <div className="w-full flex justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search by category"
                        className="input input-bordered w-full max-w-xs"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-error" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-5">
                {filteredDonations.map(item => (
                    <SingleDonation key={item.id} donation={item}></SingleDonation>
                ))}
            </div>
        </>
    );
};

export default Home;
