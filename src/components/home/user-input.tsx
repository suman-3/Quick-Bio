"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Input } from "@/components/ui/input";
import MeatIcon from "../icons/meta-icon";
import MistralIcon from "../icons/mistral-icon";
import { Slider } from "../ui/slider";
import { Info, Sparkles } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { generateBio } from "@/actions/action";
import { useContext } from "react";
import { BioContext } from "@/context/bio-context";
import { toast } from "sonner";

export const UserInput = () => {
  const formSchema = z.object({
    model: z.string().min(1, "model is Required"),
    tempareture: z.number().min(0, "must be atleast 0").max(2, "max limit 2"),
    content: z
      .string()
      .min(20, "provide a initial content atleast 20 character ")
      .max(500, "max content limit 100"),
    type: z.enum(["personal", "brand"], {
      errorMap: () => ({ message: "select a type" }),
    }),
    tone: z.enum(
      [
        "professional",
        "casual",
        "sarcastic",
        "funny",
        "passionate",
        "thoughtful",
      ],
      {
        errorMap: () => ({ message: "select a tone" }),
      }
    ),
    emojis: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "llama3-8b-8192",
      tempareture: 1,
      content: "",
      type: "personal",
      tone: "professional",
      emojis: false,
    },
  });

  const { setOutput, setLoading, loading } = useContext(BioContext);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const userInputValues = `
    User Input : ${values.content}
    Bio Type: ${values.type}
    Tone: ${values.tone}
    Emojis: ${values.emojis}
    `;

    try {
      const { data } = await generateBio(
        userInputValues,
        values.tempareture,
        values.model
      );

      toast("Bio Generated");
      setOutput(data);
    } catch (error: any) {
      console.log(error);
      toast("something went wrong try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex flex-col items-start gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full items-start gap-6"
        >
          <fieldset className="grid gap-6 rounded-[8px] border p-4 bg-background/10 backdrop-blur-sm">
            <legend className="-ml-1 px-1 font-medium text-sm text-gray-600">
              Settings
            </legend>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="llama3-8b-8192">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MeatIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-1">
                                    Llama 3
                                  </span>
                                  8B
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="mixtral-8x7b-32768">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MistralIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-1">
                                    Mixtral
                                  </span>
                                  8x7b
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="llama3-70b-8192">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MeatIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-1">
                                    Llama 3
                                  </span>
                                  70B
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="tempareture"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel className="flex items-center justify-between pb-2">
                      <span className="flex gap-1 items-center justify-center">
                        Creativity
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 ml-1 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent
                              sideOffset={25}
                              collisionPadding={20}
                              className="max-w-sm"
                            >
                              <p>
                                A higher setting produces more creative and
                                surprising bios, while a lower setting sticks to
                                more predictable and conventional styles.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                      <span>{value}</span>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        defaultValue={[1]}
                        min={0}
                        max={2}
                        step={0.1}
                        onValueChange={(val) => onChange(val[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>

          <fieldset className="grid gap-6 rounded-[8px] border p-4 bg-background/10 backdrop-blur-sm">
            <legend className="-ml-1 px-1 text-sm font-medium text-gray-600">
              User Input
            </legend>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">About Youreself</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add your old bio or write few sentenses about youreself"
                        {...field}
                        className="resize-none min-h-[10rem]"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal">Personal</SelectItem>
                          <SelectItem value="brand">Brand</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Tone</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a tone" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="professional">
                            Professional
                          </SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="sarcastic">Sarcastic</SelectItem>
                          <SelectItem value="funny">Funny</SelectItem>
                          <SelectItem value="passionate">Passionate</SelectItem>
                          <SelectItem value="thoughtful">Thoughtful</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="emojis"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel className="">Add Emojis</FormLabel>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="!my-0"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>

          <Button
            isLoading={loading}
            loadingText="Generating"
            className="flex items-center gap-2"
            variant="gooeyRight"
          >
            <Sparkles className="size-4" />
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
};
