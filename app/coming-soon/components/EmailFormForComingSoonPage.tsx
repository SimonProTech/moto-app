"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import React from "react";
import { ChevronsRight, LoaderCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  email: z.email({
    error: "Podaj poprawny adres email.",
  }),
});

const EmailFormForComingSoonPage = () => {
  const supabase = createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase
        .from("coming-soon-email-collector")
        .insert([{ email }]);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Dzięki! Powiadomimy Cię o starcie.", {
        className: "toast-success",
        id: "success",
      });
      form.reset();
    },
    onError: (error: Error & { code?: string }) => {
      if (error.code === "23505") {
        toast.error("Podany e-mail już istnieje w bazie.", {
          className: "toast-error",
          id: "error",
        });
      } else {
        toast.error("Coś poszło nie tak. Spróbuj ponownie.", {
          richColors: true,
        });
      }
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values.email);
  }

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  required
                  {...field}
                  type="email"
                  placeholder="Podaj swój email"
                  className={cn(
                    `py-6 border-2 border-gray-600 duration-500 transition-all hover:border-white px-5 md:text-lg w-full lg:max-w-md ml-auto rounded-full`,
                  )}
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="text-ring">
                Powiadom mnie o starcie projektu
              </FormDescription>
            </FormItem>
          )}
        />
        {isPending ? (
          <button
            type="submit"
            className="absolute animate-spin rounded-full z-20 bg-red-400s cursor-pointer text-gray-200 right-5 top-2 mt-1"
            aria-label="Submit"
          >
            <LoaderCircle size={30} />
          </button>
        ) : (
          <button
            type="submit"
            className="absolute animate-pulse rounded-full z-20 bg-red-400s cursor-pointer text-gray-200 right-5 top-2 mt-1"
            aria-label="Submit"
          >
            <ChevronsRight size={30} />
          </button>
        )}
      </form>
    </Form>
  );
};

export default EmailFormForComingSoonPage;
