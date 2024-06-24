"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs"; 

interface textProps {
  text:string
}

const SaveLabel = ({ text }:textProps) => {

  
  const [label, setLabel] = useState("save");
  const router = useRouter();
  const { getToken } = useAuth();

  const handleClick = async () => {
    try {
      const token = await getToken();
      const res = await fetch('/api/bio', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ bio: text })
      });

      if (res.ok) {
        setLabel("saved!");
        toast("Bio saved");
        router.refresh();
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error(error);
      toast("Failed to save bio");
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={"outline"}
      className="text-sm text-muted-foreground bg-background my-0 h-auto rounded-none rounded-bl-md rounded-br-md border border-primary/20  hover:bg-primary hover:text-primary-foreground pt-0 pb-0.5"
    >
      {label}
    </Button>
  );
};

export default SaveLabel;
