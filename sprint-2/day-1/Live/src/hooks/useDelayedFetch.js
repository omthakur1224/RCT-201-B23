import {useState } from "react";

const useDelayedFetch=(apiFn,initialValue)=>{
   const [loading,setLoading]=useState(false);
   const [error,setError]=useState("");
   const [success,setSuccess]=useState(false);
   const [data,setData]=useState(initialValue);

   const execute = async(params)=>{
       try{
            setLoading(true);
            let res=await apiFn(params);
            setData(res);
            setSuccess(true);
        }
        catch(e){
            setError(e.message);
            setSuccess(false);
        }
        finally{
            setLoading(false)
        }
    }
  return{success,error,loading,execute,data,setLoading}
}

export default useDelayedFetch;