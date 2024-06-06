import React from 'react'
import { Badge } from '../ui/badge'

export const Output = () => {
    return (
       <div className='relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5'>
<Badge variant="outline" className='absolute top-3 right-3 z-50' >Output</Badge>

       </div>
    )
}
