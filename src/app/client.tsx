"use client"
import { useTRPC } from "@/api/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const Client = ()=>{
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.createAI.queryOptions({text:"mo yaqoob"}))

    useEffect(()=>{})

    const [] = useState()

    return(
         <div>
            {JSON.stringify(data)}
         </div>
    )
}