import { useCallback, useReducer } from "react";

function httpReducer(state, action) {
    switch (action.type) {
        case 'SEND':
            return {
                status: 'pending',
                data: null,
                error: null,
            }
        case 'SUCCESS':
            return {
                status: 'completed',
                data: action.responseData,
                error: null,
            }
        case 'ERROR':
            return {
                status: 'completed',
                data: null,
                error: action.errorMessage,
            }
        default:
            return state;
    }
}

/**
 * This hook is utilized to execute http request and get the response as an object.
 * @param  {function} requestFunction A http function of /lib.api.js to be utilized or other kind of http request.
 * @returns {{httpState:object, sendRequest:function}},
 */
function useHttp(requestFunction) {
    const init = {
        status: 'not send',
        data: null,
        error: null
    }
    const [httpState, dispatch] = useReducer(httpReducer, init);
    //Saving the promise response into response variable.
    /**
     * @param x It can be the body or the uri parameter or just empty.
     */
    const sendRequest = useCallback(async (x) => {
        dispatch({ type: 'SEND' });
        try {
            const responseData = await requestFunction(x);
            dispatch({ type: 'SUCCESS', responseData });
        } catch (error) {
            dispatch({type:'ERROR',error:error.message||'Something went wrong!'});
        }
    }, [requestFunction]);

    const r = {
        httpState,
        sendRequest
    }
    return r;
}

export default useHttp;