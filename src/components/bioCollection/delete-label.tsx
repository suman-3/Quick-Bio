import React, { useState } from 'react'
import { Button } from '../ui/button'

const DeleteLabel = () => {
    const [label, setLabel] = useState("delete");
    const handleClick = async ()=>{
        setLabel("deleted")
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
