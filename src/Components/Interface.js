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
    const accessToken = {
        method: 'GET',
        //mode: 'no-cors',
        headers: new Headers({
            Authorization: 'Bearer pHYrxuIzArMgfuwGsD1pPYHWOruU3I3PRK6SlGtUCUb9dQ56xZF6LMLVTgIr9lI74TSIaaeX15DqRKJIL40O8oSJo-DeJzeRm6KoRO8qDOzK678a-LpJPfHxeg3FW3Yx'
        })
    }

    const url = `https://api.yelp.com/v3/businesses/${yelp_id}`;
    console.log(url);

    fetch(url, accessToken).then((response) => {
        console.log(response)})
        .catch((err) => {
            console.log(err)
        });
}
