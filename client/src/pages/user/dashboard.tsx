import { useQuery } from "@tanstack/react-query";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StoreWithRating } from "@shared/schema";
import { SortableTable } from "@/components/tables/sortable-table";
import { StarRating } from "@/components/ui/star-rating";
import { Store, Star, Building } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function UserDashboard() {
  const { data: stores = [], isLoading } = useQuery<StoreWithRating[]>({
    queryKey: ["/api/user/stores"],
  });

  const topRatedStores = [...stores]
    .sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
    .slice(0, 5);

  const columns = [
    {
      header: "Store Name",
      accessorKey: "name" as keyof StoreWithRating,
      isSortable: true,
      cell: (store: StoreWithRating) => (
        <div className="font-medium">{store.name}</div>
      ),
    },
    {
      header: "Address",
      accessorKey: "address" as keyof StoreWithRating,
      cell: (store: StoreWithRating) => (
        <div className="max-w-xs truncate">{store.address}</div>
      ),
    },
    {
      header: "Rating",
      accessorKey: "averageRating" as keyof StoreWithRating,
      isSortable: true,
      cell: (store: StoreWithRating) => (
        <div className="flex items-center">
          <div className="font-medium text-gray-900 mr-2">
            {store.averageRating ? store.averageRating.toFixed(1) : "N/A"}
          </div>
          {store.averageRating && (
            <StarRating value={Math.round(store.averageRating)} readOnly size="sm" />
          )}
        </div>
      ),
    },
    {
      header: "Your Rating",
      accessorKey: "userRating" as keyof StoreWithRating,
      isSortable: true,
      cell: (store: StoreWithRating) => (
        <div className="flex items-center">
          {store.userRating ? (
            <>
              <div className="font-medium text-gray-900 mr-2">
                {store.userRating.toFixed(1)}
              </div>
              <StarRating value={Math.round(store.userRating)} readOnly size="sm" />
            </>
          ) : (
            <span className="text-gray-400">Not rated</span>
          )}
        </div>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">Your Dashboard</h1>
        <p className="mt-1 text-base text-gray-500">
          See top rated stores and manage your ratings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold flex items-center">
                <Store className="mr-2 h-5 w-5 text-primary" />
                Total Stores
              </CardTitle>
              <CardDescription>Available stores to rate</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stores.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                Your Ratings
              </CardTitle>
              <CardDescription>Stores you've rated</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {stores.filter(store => store.userRating).length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold flex items-center">
                <Building className="mr-2 h-5 w-5 text-primary" />
                Unrated Stores
              </CardTitle>
              <CardDescription>Stores waiting for your rating</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {stores.filter(store => !store.userRating).length}
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Top Rated Stores</h2>
        <div className="mb-6">
          <SortableTable
            data={topRatedStores}
            columns={columns}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/user/stores">
            <Button className="w-full md:w-auto">
              View All Stores
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}