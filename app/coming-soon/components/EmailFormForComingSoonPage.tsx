"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import React from "react";
import { ChevronsRight, CircleChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.email({
    error: "Podaj swój adres email!",
  }),
});

const EmailFormForComingSoonPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  required
                  placeholder="Podaj swój email"
                  className={cn(
                    `py-6 border-2 border-gray-600 duration-500 transition-all hover:border-white px-5 md:text-lg w-full lg:max-w-md ml-auto rounded-full`,
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          className="absolute animate-pulse rounded-full z-20 bg-red-400s cursor-pointer text-gray-200 right-5 top-2 mt-1"
          aria-label="Submit"
        >
          <ChevronsRight size={30} />
        </button>
      </form>
    </Form>
  );
};

export default EmailFormForComingSoonPage;
