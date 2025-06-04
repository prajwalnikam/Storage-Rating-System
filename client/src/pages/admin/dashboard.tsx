import { useQuery } from "@tanstack/react-query";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AddStoreDialog } from "@/components/dialogs/add-store-dialog";
import { AddUserDialog } from "@/components/dialogs/add-user-dialog";
import { Loader2, Users, Store, Star, Plus } from "lucide-react";
import { useState } from "react";
import { StoreStatistics } from "@shared/schema";

export default function AdminDashboard() {
  const [addStoreDialogOpen, setAddStoreDialogOpen] = useState(false);
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);

  const { data: stats, isLoading } = useQuery<StoreStatistics>({
    queryKey: ["/api/admin/statistics"],
  });
  
  return (
    <MainLayout>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
        
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Users Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                  <dd>
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin text-primary-600 mt-1" />
                    ) : (
                      <div className="text-lg font-medium text-gray-900">{stats?.totalUsers || 0}</div>
                    )}
                  </dd>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Total Stores Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                  <Store className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Stores</dt>
                  <dd>
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin text-primary-600 mt-1" />
                    ) : (
                      <div className="text-lg font-medium text-gray-900">{stats?.totalStores || 0}</div>
                    )}
                  </dd>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Total Ratings Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                  <Star className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Ratings</dt>
                  <dd>
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin text-primary-600 mt-1" />
                    ) : (
                      <div className="text-lg font-medium text-gray-900">{stats?.totalRatings || 0}</div>
                    )}
                  </dd>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Button 
              onClick={() => setAddStoreDialogOpen(true)}
              className="flex items-center justify-center"
            >
              <Plus className="mr-2 h-5 w-5" /> Add New Store
            </Button>
            <Button 
              onClick={() => setAddUserDialogOpen(true)}
              className="flex items-center justify-center"
            >
              <Plus className="mr-2 h-5 w-5" /> Add New User
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dialogs */}
      <AddStoreDialog 
        open={addStoreDialogOpen} 
        onOpenChange={setAddStoreDialogOpen} 
      />
      <AddUserDialog 
        open={addUserDialogOpen} 
        onOpenChange={setAddUserDialogOpen} 
      />
    </MainLayout>
  );
}
