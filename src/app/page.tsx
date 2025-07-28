"use client";
import { useTRPC } from "@/api/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const { data, error } = useQuery(
    trpc.createAI.queryOptions({ text: "called from the client" })
  );
  console.log(data?.greeting);
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default Page;
