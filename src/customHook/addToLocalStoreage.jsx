import swal from "sweetalert";

const addToLocalStorage = (showDetail) => {
    const currentItem = [];
    const getItem = JSON.parse(localStorage.getItem("donated"));
    console.log(getItem);

    if(!getItem){
        currentItem.push(showDetail);
        localStorage.setItem("donated", JSON.stringify(currentItem))
        swal(" ", "Successfully Add Donatation", "success");
    }else{
        const isExit = getItem.find(item => item.id == showDetail.id)
        console.log("isExit", isExit);
        if(!isExit){
            currentItem.push(...getItem ,showDetail)
            localStorage.setItem("donated", JSON.stringify(currentItem))
            swal(" ", "Successfully Add Donatation", "success");
        }else{
            swal(" " ,"Duplicate Item Found", "error");
        }
    }
    


    console.log("working Local", showDetail);
}

export default addToLocalStorage;