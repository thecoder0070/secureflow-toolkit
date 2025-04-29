
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
import ComplianceDashboardPage from "./pages/compliance-dashboard";
import RiskRegisterPage from "./pages/risk-register";
import NoCodeUIStudio from "./pages/no-code-ui";
import NoCodeUIFlow from "./pages/no-code-ui/flow";
import FormsPage from "./pages/forms";
import RulesCatalogPage from "./pages/rules-catalog";
import NewRulePage from "./pages/rules-catalog/new";
import IntegrationsPage from "./pages/integrations";
import UserManagementPage from "./pages/user-management";
import ChatInterface from "./pages/chat";
import TrustCenterPage from "./pages/trust-center";
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
          <Route path="/compliance-dashboard" element={<ComplianceDashboardPage />} />
          <Route path="/risk-register" element={<RiskRegisterPage />} />
          <Route path="/no-code-ui" element={<NoCodeUIStudio />} />
          <Route path="/no-code-ui/flow/:id" element={<NoCodeUIFlow />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/rules-catalog" element={<RulesCatalogPage />} />
          <Route path="/rules-catalog/new" element={<NewRulePage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/trust-center" element={<TrustCenterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
