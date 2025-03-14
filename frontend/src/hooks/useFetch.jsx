import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, SetError] = useState(null)

    
    useEffect(() => {
if(!url) return
        fetch(url)
            .then(res => {
                if (!res.ok) {

                    throw Error('Please check your input data')
                }

                return res.json()

            })

            .then(data => {
                setData(data);
                setIsPending(false)
                console.log(data);
                SetError(null)
            })
            .catch(err => {

                console.log(err.message);
                SetError(err.message)
                console.log(error);

                setIsPending(false)

            })

    }, [url, error]);

    return { data, isPending, error }

}

