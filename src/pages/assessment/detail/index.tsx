
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Download,
  RefreshCw,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  ChevronDown,
  ArrowUpDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface UserRecord {
  id: string;
  creationDate: string;
  customerId: string;
  emailId: string;
  groups: string;
  isEnforcedIn2Sv: boolean;
}

const AssessmentDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample data for active user records
  const userRecords: UserRecord[] = [
    {
      id: '1109959888477763543',
      creationDate: '2024-02-06T19:10:34.000Z',
      customerId: 'C022r4d71',
      emailId: 'co1@riskdevops.com',
      groups: '',
      isEnforcedIn2Sv: false,
    },
    {
      id: '1047377334739744780',
      creationDate: '2024-02-01T19:38:59.000Z',
      customerId: 'C022r4d71',
      emailId: 'grclead1@riskdevops.com',
      groups: '',
      isEnforcedIn2Sv: false,
    },
    {
      id: '1140770673042209085',
      creationDate: '2024-02-01T19:40:34.000Z',
      customerId: 'C022r4d71',
      emailId: 'grclead2@riskdevops.com',
      groups: '',
      isEnforcedIn2Sv: false,
    },
    {
      id: '1090529108646755140',
      creationDate: '2024-02-22T18:55:39.000Z',
      customerId: 'C022r4d71',
      emailId: 'grclead3@riskdevops.com',
      groups: '',
      isEnforcedIn2Sv: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <div className="flex flex-col mb-6">
              <Breadcrumb className="mb-4">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/assessment" asChild>
                    <Link to="/assessment">Assessment Runs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/compliance-resources" asChild>
                    <Link to="/compliance-resources">Compliance Checks</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" asChild>
                    <Link to="#">SaaS Compliance-10/31/2024</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>ActiveUserReport</BreadcrumbPage>
                </BreadcrumbItem>
              </Breadcrumb>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">View Evidence Records</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Active User Report for SaaS Compliance Assessment Run {id}
              </p>
            </div>
          </div>
          
          <GlassCard className="p-6 mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
              <p className="text-amber-800">
                Kindly commit any updates you make to the records, before navigating away to ensure updates are reflected for other users
              </p>
              <div className="flex justify-end mt-2">
                <Button variant="default" size="sm">Commit</Button>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-3">
                <Select defaultValue="active">
                  <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800">
                    <SelectValue placeholder="Record Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="all">All Records</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="destructive" size="sm">
                  InActivate Records
                </Button>
                
                <Button variant="default" size="sm" className="gap-2 bg-primary">
                  <RefreshCw className="h-4 w-4" />
                  <span>Records</span>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Select defaultValue="action">
                  <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800">
                    <SelectValue placeholder="Action Descriptions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="action">Action Descriptions</SelectItem>
                    <SelectItem value="edit">Edit Record</SelectItem>
                    <SelectItem value="delete">Delete Record</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="default" size="sm" className="bg-primary">
                  Assign All Records
                </Button>
                
                <Button variant="default" size="sm" className="bg-primary">
                  Associate
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                <span>Export All Data</span>
              </Button>
              
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                <span>Export Selected Rows</span>
              </Button>
              
              <div className="ml-auto flex flex-wrap gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-primary/5">
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <input type="checkbox" className="h-4 w-4" />
                    </TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                    <TableHead>
                      ActiveUserReport_id
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      creationDateTime
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      customerID
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      emailID
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      groups
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      isEnforcedIn2Sv
                      <Button variant="ghost" size="sm" className="ml-2 h-7 p-0">
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                
                <TableBody>
                  {userRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>
                        <input type="checkbox" className="h-4 w-4" />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                      <TableCell className="font-mono text-xs">{record.id}</TableCell>
                      <TableCell>{record.creationDate}</TableCell>
                      <TableCell>{record.customerId}</TableCell>
                      <TableCell>{record.emailId}</TableCell>
                      <TableCell>{record.groups}</TableCell>
                      <TableCell>
                        <Badge variant={record.isEnforcedIn2Sv ? "success" : "outline"}>
                          {record.isEnforcedIn2Sv ? "true" : "false"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default AssessmentDetail;
