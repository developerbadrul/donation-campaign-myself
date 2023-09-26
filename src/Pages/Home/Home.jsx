import { useEffect, useState } from "react";
import SingleDonation from "../../components/SingleDonation/SingleDonation";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [donations, setDonations] = useState([]);

    // const receiveData = useLoaderData()


    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    // useEffect(() => {
    //     const loadData = async () => {
    //         const res = await fetch('donation.json');
    //         const data = await res.json();
    //         setDonations(data.donation_items);
    //     }
    //     loadData()
    // }, []);

    // console.log(donations);
    return (
        <>
            <div className="w-full bg-[url('https://i.ibb.co/K6T11QX/banner.jpg')] h-72 bg-center bg-cover">
                <h1 className="text-3xl text-center text-white font-bold py-5">I Grow By Helping People In Need</h1>
                <div className="w-full flex justify-center items-center gap-4">

                    <input type="text" placeholder="Search Here" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-error">Search</button>
                </div>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-5">
                {
                    // console.log(donations)
                    donations.map(item => <SingleDonation key={item.id} donation={item}></SingleDonation>)
                }
                
            </div>
        </>
    );
};

export default Home;