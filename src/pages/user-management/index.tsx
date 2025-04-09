
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { PlusCircle, Search, Filter, UserPlus, Upload, RefreshCw, Edit, Trash, User, Grid, List } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: 'Phoenix Raj',
    subtitle: 'personal account',
    email: 'phoenix.raj@cowphoenix.onmicrosoft.com',
    role: 'admin',
    lastUpdated: '03/24/2025 3:43 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 2,
    name: 'Krithika V',
    subtitle: '',
    email: 'krithika.v@continube.com',
    role: 'admin',
    lastUpdated: '04/07/2025 9:07 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 3,
    name: 'Azure Admin',
    subtitle: '',
    email: 'two.test@riskdevops.com',
    role: 'form operator',
    lastUpdated: '01/29/2025 1:19 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 4,
    name: 'Megha',
    subtitle: 'Project Manager',
    email: 'phoenix.pm1@cowphoenix.onmicrosoft.com',
    role: 'admin',
    lastUpdated: '01/29/2025 1:13 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 5,
    name: 'Megha',
    subtitle: 'Golang Developer',
    email: 'phoenix.three@cowphoenix.onmicrosoft.com',
    role: 'admin',
    lastUpdated: '04/09/2025 10:53 AM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 6,
    name: 'Luke Ford',
    subtitle: '',
    email: 'luke@withcompliancecow.com',
    role: 'form operator',
    lastUpdated: '11/07/2024 2:51 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 7,
    name: 'Megha',
    subtitle: '',
    email: 'megha.shah@continube.com',
    role: 'admin',
    lastUpdated: '04/09/2025 9:53 AM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 8,
    name: 'Vivek',
    subtitle: '',
    email: 'vivek.p@continube.com',
    role: 'form operator',
    lastUpdated: '10/22/2024 2:05 AM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 9,
    name: 'Sangavi L',
    subtitle: '',
    email: 'sangavi.l@continube.com',
    role: 'admin',
    lastUpdated: '04/07/2025 9:32 PM',
    status: 'ACTIVE',
    avatar: '',
  },
  {
    id: 10,
    name: 'Mani',
    subtitle: '',
    email: 'mani.m@continube.com',
    role: 'form operator',
    lastUpdated: '04/08/2025 7:05 AM',
    status: 'ACTIVE',
    avatar: '',
  },
];

const UserManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('users');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Simulate a query to fetch users
  const { data: users = mockUsers, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      // In a real app, this would be an API call
      return mockUsers;
    },
  });

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filteredUsers.length / perPage);

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin':
        return 'default';
      case 'form operator':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
            <p className="text-muted-foreground mt-1">
              View and manage users and their permissions
            </p>
          </div>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="users" className="text-sm">USERS</TabsTrigger>
            <TabsTrigger value="blocks" className="text-sm">USER BLOCKS</TabsTrigger>
            <TabsTrigger value="roles" className="text-sm">ROLES</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Filter className="h-3.5 w-3.5 mr-1" />
                    Filter
                  </Button>
                  <div className="flex gap-1 border rounded-md p-0.5">
                    <Button 
                      variant={viewMode === 'table' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => setViewMode('table')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4 pb-2">
                <p className="text-sm text-muted-foreground">
                  Showing {paginatedUsers.length} of {filteredUsers.length} users
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto">
                        <PlusCircle className="h-4 w-4 mr-1" />
                        Add User
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                          Enter the details to create a new user account.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input id="name" placeholder="Enter full name" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="Enter email address" />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="role" className="text-sm font-medium">
                            Role
                          </label>
                          <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="admin">Admin</option>
                            <option value="form operator">Form Operator</option>
                            <option value="viewer">Viewer</option>
                          </select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Create User</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-1" />
                    Upload Users
                  </Button>
                  <Button variant="outline">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Resend Verification
                  </Button>
                </div>
              </div>
            </div>

            {viewMode === 'table' ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[80px]">Actions</TableHead>
                      <TableHead>User Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4 text-muted-foreground" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div>{user.name}</div>
                              {user.subtitle && (
                                <div className="text-xs text-muted-foreground">{user.subtitle}</div>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastUpdated}</TableCell>
                        <TableCell>{user.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedUsers.map((user) => (
                  <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          {user.subtitle && (
                            <p className="text-xs text-muted-foreground">{user.subtitle}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-0.5">{user.email}</p>
                        </div>
                      </div>
                      <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
                        {user.role}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{user.lastUpdated}</span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4 text-muted-foreground" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rows per page</span>
                <select
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value));
                    setPage(1);
                  }}
                  className="h-8 w-16 rounded-md border border-input bg-background px-2 text-xs"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <div className="text-sm">
                  {page} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blocks" className="space-y-4">
            <div className="flex justify-center items-center p-8 text-center">
              <div className="max-w-md">
                <User className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">User Blocks Management</h3>
                <p className="mt-2 text-muted-foreground">
                  View and manage blocked users and their access restrictions.
                </p>
                <Button className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Block
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-4">
            <div className="flex justify-center items-center p-8 text-center">
              <div className="max-w-md">
                <User className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Role Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Configure and manage user roles and permissions.
                </p>
                <Button className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Role
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserManagementPage;
