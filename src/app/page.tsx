import  {prisma}  from "@/lib/db"; // adjust your import
import { Button } from "@/components/ui/button";

async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="text-red-500 items-center">
      this is a new nextjs project. working on it,
      <Button variant="link">Click me</Button>

      <div className="mt-4 space-y-2">
        {JSON.stringify(users,null,3)}
      </div>
    </div>
  );
}

export default Home