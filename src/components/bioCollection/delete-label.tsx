import React, { useState } from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner';




interface deleteProps{
  id: string
}

const DeleteLabel = ({id}:deleteProps) => {

    const [label, setLabel] = useState("delete");


    const handleClick = async ()=>{
        try {
          const res = await fetch(`/api/bio?id=${id}`,{
            method: "DELETE"
          })

          if (res.ok) {
            setLabel("deleted!");
            toast("Bio deleted");
            window.location.reload(); 
          } else {
            console.error("Failed to delete the Bio.");
          }
        } catch (error) {
          console.error("An error occurred :", error);
          toast("Bio not deleted")
        }
    }



  return (
    <div>
      <Button
      onClick={handleClick}
      variant={"outline"}
      className="text-sm text-muted-foreground bg-background my-0 h-auto rounded-none rounded-bl-md rounded-br-md border border-primary/20  hover:bg-primary hover:text-primary-foreground pt-0 pb-0.5"
    >
      {label}
    </Button>
    </div>
  )
}

export default DeleteLabel
