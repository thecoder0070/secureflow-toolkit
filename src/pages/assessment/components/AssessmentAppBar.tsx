
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  Database,
  Bell,
  Mail,
  Settings,
  ChevronDown,
  BarChart,
  ListChecks,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AssessmentAppBar = () => {
  return (
    <div className="mb-6 py-2">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap gap-1">
            {/* Dashboard */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Overview Dashboard</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <BarChart className="h-4 w-4" />
                        <span>Analytics</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Reports */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <FileText className="mr-2 h-4 w-4" />
                <span>Reports</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <FileText className="h-4 w-4" />
                        <span>Compliance Reports</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <BarChart className="h-4 w-4" />
                        <span>Performance Reports</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Assessments */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "bg-transparent",
                location.pathname.includes("/assessment") && "text-primary font-medium"
              )}>
                <ClipboardList className="mr-2 h-4 w-4" />
                <span>Assessments</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/assessment" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <ClipboardList className="h-4 w-4" />
                        <span>Assessment Runs</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <ListChecks className="h-4 w-4" />
                        <span>Templates</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* My Queue */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <ListChecks className="mr-2 h-4 w-4" />
                <span>My Queue</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <ListChecks className="h-4 w-4" />
                        <span>Tasks</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <FileText className="h-4 w-4" />
                        <span>Pending Reviews</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/lovable-uploads/03395bb7-dc8e-4707-8083-f4db142c1c7b.png" />
                  <AvatarFallback className="bg-primary text-white">SR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">Phoenix Raj</span>
                  <span className="text-xs text-muted-foreground">Admin</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AssessmentAppBar;
