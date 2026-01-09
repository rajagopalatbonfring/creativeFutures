import { ActivityList } from "@/components/activity-list";

export default function ActivitiesPage() {
  return (
    <>
      <div className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose Your Adventure
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find the perfect creative challenge for you.
            </p>
          </div>
          <ActivityList />
        </div>
      </div>
    </>
  );
}
