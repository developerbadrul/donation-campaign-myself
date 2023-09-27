/* eslint-disable react/prop-types */

const DonatedDetails = ({ donated }) => {
    const categoryBadgeStyle = {
        backgroundColor: donated?.category_bg_color,
    };

    const cardBodyStyle = {
        backgroundColor: donated?.card_bg_color,
    };

    const buttonStyle = {
        backgroundColor: donated?.text_button_bg_color,
    };

    return (
        <div className="card card-side bg-base-100 shadow-xl py-3">
            <figure><img src={donated.picture} alt="Movie" /></figure>
            <div className="card-body" style={cardBodyStyle}>
                <h2 className="card-title">{donated.title}</h2>
                <div className="badge badge-secondary" style={categoryBadgeStyle}>{donated.category}</div>
                <p>{donated.description.slice(0, 100)}</p>
                <p>${donated.price}</p>
                <div className="card-actions justify-end">
                    <button style={buttonStyle} className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>View Details</button>

                    

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box text-justify">
                            <h3 className="font-bold text-lg">Details:</h3>
                            {/* {console.log()} */}
                            <img className="mx-auto w-8/12" src={donated.picture} alt="" />
                            <div className="flex gap-4 items-center">
                            <h3 className="font-bold text-lg">Title:{donated.title}</h3>
                            <div className="badge badge-secondary">{donated.category}</div>
                            </div>
                            <p className="py-4">{donated.description}</p>
                            <p className="text-blue-400 font-bold">Price: ${donated.price}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-error">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export { DonatedDetails };