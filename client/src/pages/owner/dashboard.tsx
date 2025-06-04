import { useQuery } from "@tanstack/react-query";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SortableTable } from "@/components/tables/sortable-table";
import { StarRating } from "@/components/ui/star-rating";
import { StoreWithRating, RatingWithUser } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

export default function OwnerDashboard() {
  const { data: store, isLoading: storeLoading } = useQuery<StoreWithRating>({
    queryKey: ["/api/owner/store"],
  });
  
  const { data: ratings = [], isLoading: ratingsLoading } = useQuery<RatingWithUser[]>({
    queryKey: ["/api/owner/ratings"],
  });

  const columns = [
    {
      header: "Customer",
      accessorKey: "userName" as keyof RatingWithUser,
      cell: (rating: RatingWithUser) => (
        <div>
          <div className="font-medium">{rating.userName}</div>
          <div className="text-sm text-gray-500">{rating.userEmail}</div>
        </div>
      ),
      isSortable: true,
    },
    {
      header: "Rating",
      accessorKey: "rating" as keyof RatingWithUser,
      cell: (rating: RatingWithUser) => (
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900 mr-2">
            {rating.rating}
          </div>
          <StarRating
            value={rating.rating}
            readOnly
            size="sm"
          />
        </div>
      ),
      isSortable: true,
    },
    {
      header: "Date",
      accessorKey: "createdAt" as keyof RatingWithUser,
      cell: (rating: RatingWithUser) => (
        <div className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(rating.createdAt), { addSuffix: true })}
        </div>
      ),
      isSortable: true,
    },
  ];

  return (
    <MainLayout>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Store Dashboard</h2>
        
        <Card className="mt-6">
          <CardHeader>
            <h3 className="text-lg font-medium text-gray-900">Store Information</h3>
          </CardHeader>
          <CardContent>
            {store && (
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Store name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {store.name}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {store.email}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {store.address}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Average Rating</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="flex items-center">
                      <div className="text-xl font-medium text-gray-900 mr-2">
                        {store.averageRating.toFixed(1)}
                      </div>
                      <StarRating
                        value={Math.round(store.averageRating)}
                        readOnly
                        size="md"
                      />
                      <span className="ml-2 text-sm text-gray-500">
                        ({store.totalRatings} ratings)
                      </span>
                    </div>
                  </dd>
                </div>
              </dl>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">Customer Ratings</h3>
          
          <div className="mt-4">
            <SortableTable
              data={ratings}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
