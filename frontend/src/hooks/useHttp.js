import { useCallback, useState } from "react";

function useHttp(requestFunction) {
    const [response, setResponse] = useState([]);

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