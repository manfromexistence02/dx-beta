/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MWA9gHGNga7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default//ui/accordion"
import { Button } from "@/registry/default//ui/button"
import { Card, CardContent } from "@/registry/default//ui/card"
import { Checkbox } from "@/registry/default//ui/checkbox"
import { Input } from "@/registry/default//ui/input"
import { Label } from "@/registry/default//ui/label"

export default function Component() {
  return (
    <>
      <section className="w-full bg-background py-12 dark:bg-gray-800 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="sm:text-4xl text-3xl font-bold tracking-tighter md:text-5xl">
              Find Your Dream Job
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the perfect job opportunity that aligns with your skills
              and passions. Browse our extensive listings and apply today.
            </p>
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input
                className="flex-1"
                placeholder="Search jobs..."
                type="search"
              />
              <Button>Search</Button>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
            height="400"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Accordion className="w-full" collapsible type="single">
              <AccordionItem value="category">
                <AccordionTrigger className="text-base font-semibold">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-engineering" />
                      Engineering{"\n                                  "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-design" />
                      Design{"\n                                  "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-marketing" />
                      Marketing{"\n                                  "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-sales" />
                      Sales{"\n                                  "}
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="category-finance" />
                      Finance{"\n                                  "}
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="grid gap-6 md:gap-8">
            <div className="grid gap-4 md:gap-6">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold tracking-tight">
                  Explore Job Opportunities
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse our curated list of open positions.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Senior Frontend Engineer
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Lead the development of our cutting-edge web application.
                      Collaborate with a talented team of engineers and
                      designers.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Product Designer</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Join our design team and help shape the user experience of
                      our innovative products. Bring your creativity and
                      attention to detail.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Digital Marketing Specialist
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Develop and execute effective digital marketing campaigns
                      to drive growth and engagement for our brand. Leverage
                      data-driven insights.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Sales Representative
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Join our sales team and help businesses discover our
                      innovative solutions. Excellent communication and
                      negotiation skills required.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Financial Analyst</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Analyze financial data and provide insights to help our
                      company make informed decisions. Strong analytical and
                      problem-solving skills needed.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Content Writer</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Craft engaging and informative content to support our
                      marketing initiatives. Excellent writing and research
                      skills required.
                    </p>
                    <Button size="sm">Apply Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}