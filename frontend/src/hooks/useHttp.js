import { useCallback, useState } from "react";
/**
 * This hook is utilized to execute http request and get the response as an object.
 * @param  {object} requestFunction A http function of /lib.api.js to be utilized.
 * @returns {Array} Array of [response, sendRequest].
 * - response: The result of the request is an object, this result is just available after executing sendRequest function, otherwise will be an empty Array.
 * - sendRequest: Function utilized to execute the request.
 */
function useHttp(requestFunction) {
    //Saving the promise response into response variable.
    const [response, setResponse] = useState([]);

    const sendRequest = useCallback( async(x)=>{
        const jsonResponse = await requestFunction(x);
        setResponse(jsonResponse);
    },[requestFunction]);

    console.log(response);
    const r ={
        response: response,
        sendRequest
    }

    return r;
}

export default useHttp;