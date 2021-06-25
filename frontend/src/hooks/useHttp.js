import { useCallback, useState } from "react";
/**
 * This hook is utilized to execute http request and get the response as an object.
 * @param  {function} requestFunction A http function of /lib.api.js to be utilized or other kind of http request.
 * @returns {{response:object, sendRequest:function}},
 */
function useHttp(requestFunction) {
    //Saving the promise response into response variable.
    const [response, setResponse] = useState([]);
    /**
     * @param x It can be the body or the uri parameter or just empty.
     */
    const sendRequest = useCallback( async(x)=>{
        const jsonResponse = await requestFunction(x);
        setResponse(jsonResponse);
    },[requestFunction]);

    const r ={
        response: response,
        sendRequest
    }

    return r;
}

export default useHttp;