import React, { useEffect, useState } from "react";
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";
import useDelayedFetch from './../../hooks/useDelayedFetch';

const AddPost = ({ onAddPost }) => {
  const {execute,data,error,loading,success,setLoading}=useDelayedFetch(addPost,{});
  const toast = useToast();

  const [message, setMessage] = useState("");

  useEffect(()=>{
    if(success){
      onAddPost(data);
      toast({
        title: `Post added successfully`,
        status: "success", 
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }if(error){
      toast({
        title: "Error Occurred while trying to add Post",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    //// eslint-disable-next-line 
  },[error,success,toast])

  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={()=>execute({content:message})} colorScheme="green" isLoading={loading}>
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
