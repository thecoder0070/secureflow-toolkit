
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  document: z.string().min(1, {
    message: "Please specify which document you need.",
  }),
  purpose: z.string().min(10, {
    message: "Please provide at least 10 characters explaining your purpose.",
  }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms.",
  }),
});

const RequestAccess = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      document: "",
      purpose: "",
      agreeTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would submit to an API endpoint
    console.log(values);
    
    toast({
      title: "Request submitted",
      description: "We'll review your request and get back to you shortly.",
    });
    
    form.reset();
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Access to Restricted Documents?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're happy to share our security documentation with potential and current customers.
            Submit a request below for access to restricted documents like SOC 2 reports.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Request Document Access</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Request Document Access</DialogTitle>
                <DialogDescription>
                  Fill out this form to request access to secure documents. We'll review your request and respond within 1-2 business days.
                </DialogDescription>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company, Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="document"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Requested Document</FormLabel>
                        <FormControl>
                          <Input placeholder="SOC 2 Type II Report" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Request</FormLabel>
                        <FormControl>
                          <Input placeholder="Security review for potential partnership" {...field} />
                        </FormControl>
                        <FormDescription>
                          Briefly explain why you need access to this document.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to keep the requested information confidential and not share it with unauthorized parties.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter>
                    <Button type="submit">Submit Request</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default RequestAccess;
