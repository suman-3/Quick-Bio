import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CopyLabel = ({ text, className }: { text: string, className?: string }) => {
  const [label, setLabel] = useState("copy");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy the text: ", err);
    }
  };

  const handleClick = () => {
    copyToClipboard(text);
    setLabel("copied!");
  };

  return (
    <Button
      onClick={handleClick}
      variant={"outline"}
      className={cn("text-sm text-muted-foreground bg-background my-0 h-auto rounded-none rounded-bl-md rounded-br-md border border-primary/20  hover:bg-primary hover:text-primary-foreground pt-0 pb-0.5", className)}
    >
      {label}
    </Button>
  );
};

export default CopyLabel;
