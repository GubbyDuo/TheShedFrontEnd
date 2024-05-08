import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
    const [data, setData] = useState(null);

    /*
    
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();


    in the view:

    dispatch(dataSlice.actions.setData({data: newData}));
    
    */

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            await axios.get("http://localhost:8080/users").then((res) => {
                console.log(res.data);
                setData(res);
            });
        } catch (error) {
            console.log(error);
        }
    };
}
