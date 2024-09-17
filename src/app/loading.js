import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-3 ">
        <Skeleton className="h-[250px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[500px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
      </div>
    </div>
  );
}
