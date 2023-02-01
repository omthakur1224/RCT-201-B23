import React, { useEffect, useState } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";
import useDelayedFetch from "../../hooks/useDelayedFetch";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();

  const {execute,error,loading,success}=useDelayedFetch(deletePost,{});

 useEffect(()=>{
    if(success){
      toast({
        title: `Post with id: ${id}, deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onDelete(id);
    }if(error){
      toast({
        title: "Error Occurred while fetching data",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  ////  eslint-disable-next-line 
  },[error,success,toast])
  
  return (
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={()=>execute(id)}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
