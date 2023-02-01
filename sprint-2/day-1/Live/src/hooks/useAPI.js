import { useEffect, useState } from "react";

const useAPI=(apiFn)=>{
   const [loading,setLoading]=useState(false);
   const [error,setError]=useState("");
   const [success,setSuccess]=useState(false);
   const [data,setData]=useState([]);

   const execute = async()=>{
       try{
            setLoading(true);
            let res=await apiFn();
            setData(res);
            setSuccess(true);
        }
        catch(e){
            setError(e.error);
            setSuccess(false);
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        execute()
        //for removing error in next for dependecy we can use below line
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

return{success,error,loading,execute,data,setData}
}

export default useAPI;