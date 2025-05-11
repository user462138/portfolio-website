import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-12 w-64 mx-auto mb-6" />
          <Skeleton className="h-1 w-20 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-8">
              <div className="flex-1">
                <div className="bg-card/50 rounded-lg p-6">
                  <Skeleton className="h-8 w-3/4 mb-3" />
                  <div className="flex gap-4 mb-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}