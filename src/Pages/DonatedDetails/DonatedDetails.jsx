
const DonatedDetails = ({ donated }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={donated.picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{donated.title}</h2>
                <div className="badge badge-secondary">{donated.category}</div>
                <p>{donated.description.slice(0, 100)}</p>
                <p>${donated.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default DonatedDetails;