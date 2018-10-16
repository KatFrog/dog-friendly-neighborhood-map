// This file contaisn the function required for the locations list
// to properly work.

export const toggleDetails = (place) => {
    let childList = place.getElementsByTagName('li');
    for (let i = 0; i< childList.length; ++i)
    {
        let currentState = childList[i].style.display;
        if (currentState === "none"){
            childList[i].style.display="block";
        }
        else {
            childList[i].style.display="none";
        }
    }
}

export const getDetailsFromYelp = (yelp_id) => {

}
