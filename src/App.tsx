
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/assessment";
import AssessmentDetail from "./pages/assessment/detail";
import ComplianceResourcesPage from "./pages/compliance-resources";
import NoCodeUIStudio from "./pages/no-code-ui";
import NoCodeUIFlow from "./pages/no-code-ui/flow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/detail/:id" element={<AssessmentDetail />} />
          <Route path="/compliance-resources" element={<ComplianceResourcesPage />} />
          <Route path="/no-code-ui" element={<NoCodeUIStudio />} />
          <Route path="/no-code-ui/flow/:id" element={<NoCodeUIFlow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
