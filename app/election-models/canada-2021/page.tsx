import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Canada2021Page() {
  const results = [
    { party: "Liberal", seats: 159, predicted: 160, color: "bg-red-600" },
    { party: "Conservative", seats: 119, predicted: 121, color: "bg-blue-600" },
    { party: "Bloc Québécois", seats: 32, predicted: 31, color: "bg-cyan-600" },
    { party: "NDP", seats: 25, predicted: 24, color: "bg-orange-600" },
    { party: "Green", seats: 2, predicted: 2, color: "bg-green-600" },
  ]

  const keyComponents = [
    { region: "Ontario", impact: "Critical battleground - 121 seats", outcome: "Liberal plurality" },
    { region: "Quebec", impact: "Bloc Québécois stronghold - 78 seats", outcome: "Mixed results" },
    { region: "British Columbia", impact: "Competitive three-way races - 42 seats", outcome: "Liberal gains" },
    { region: "Prairies", impact: "Conservative base - 62 seats", outcome: "Conservative dominance" },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link href="/election-models">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Election Models
            </Link>
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-accent text-accent-foreground">Canada</Badge>
            <Badge variant="secondary">September 20, 2021</Badge>
            <Badge className="bg-green-600 text-white">94% Accuracy</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2021 Canadian Federal Election</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl text-pretty">
            Justin Trudeau's Liberals won a second consecutive minority government in a snap election called during the
            COVID-19 pandemic.
          </p>
        </div>
      </section>

      {/* Election Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Election Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Prime Minister Justin Trudeau called a snap election in August 2021, hoping to convert his minority
                government into a majority. The election was held during the fourth wave of the COVID-19 pandemic,
                making it a referendum on the government's pandemic response and recovery plans.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Liberals campaigned on their pandemic management record, vaccine procurement, and economic recovery
                programs. The Conservatives, led by Erin O'Toole, focused on economic recovery and accountability. The
                result was nearly identical to 2019, with the Liberals winning another minority government with 159
                seats.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Model Results */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Model Results vs. Actual Results</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              {/* Overall Comparison Summary */}
              <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Seats</p>
                    <p className="text-2xl font-bold text-primary">338</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Majority Needed</p>
                    <p className="text-2xl font-bold text-primary">170</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Model Accuracy</p>
                    <p className="text-2xl font-bold text-green-600">94%</p>
                  </div>
                </div>
              </div>

              {/* Party Results */}
              <div className="space-y-6">
                {results.map((result, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{result.party}</span>
                      <div className="flex gap-6 text-sm">
                        <span className="text-muted-foreground">
                          Model: <span className="font-semibold">{result.predicted}</span>
                        </span>
                        <span className="text-primary">
                          Actual: <span className="font-bold">{result.seats}</span>
                        </span>
                        <span
                          className={`font-semibold ${Math.abs(result.predicted - result.seats) <= 2 ? "text-green-600" : "text-yellow-600"}`}
                        >
                          {result.predicted === result.seats
                            ? "✓ Exact"
                            : `±${Math.abs(result.predicted - result.seats)}`}
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase">Model Prediction</p>
                          <div className="w-full bg-secondary/50 rounded-lg h-8 overflow-hidden border border-border">
                            <div
                              className={`h-full ${result.color} flex items-center justify-end pr-3 transition-all`}
                              style={{ width: `${(result.predicted / 338) * 100}%` }}
                            >
                              <span className="text-white text-sm font-bold">{result.predicted}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase">Actual Result</p>
                          <div className="w-full bg-secondary/50 rounded-lg h-8 overflow-hidden border border-border">
                            <div
                              className={`h-full ${result.color} flex items-center justify-end pr-3 transition-all`}
                              style={{ width: `${(result.seats / 338) * 100}%` }}
                            >
                              <span className="text-white text-sm font-bold">{result.seats}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-sm font-bold text-green-900">✓ Highly Accurate Prediction</p>
                <p className="text-xs text-green-800 mt-1">
                  Our model predicted 160 Liberal seats vs. 159 actual - within 1 seat of the final result, correctly
                  forecasting a Liberal minority government.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Key Regional Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyComponents.map((component, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{component.region}</CardTitle>
                  <CardDescription>{component.impact}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <span className="font-semibold">Outcome:</span> {component.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Significance of This Election</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Pandemic Politics</h4>
                <p className="text-muted-foreground text-sm">
                  This election served as a referendum on Canada's pandemic response. The Liberal victory validated
                  their approach to vaccine procurement, economic support programs like CERB, and public health
                  measures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Minority Government Dynamics</h4>
                <p className="text-muted-foreground text-sm">
                  The result demonstrated that Canadians preferred continued minority government, requiring cooperation
                  between parties. This shaped policy-making for the next two years, particularly on climate and
                  affordability issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regional Divisions</h4>
                <p className="text-muted-foreground text-sm">
                  The election highlighted Canada's regional political divisions, with the Liberals shut out of Alberta
                  and Saskatchewan, while dominating urban centers in Ontario and the Atlantic provinces.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.elections.ca/content.aspx?section=res&dir=rep/off/44gedata&document=index&lang=e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Elections Canada Official Results
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.cbc.ca/news/politics/federal-election-2021-pandemic-voting-1.6177089"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                CBC: Pandemic Election Analysis
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.theglobeandmail.com/politics/article-liberal-minority-government-trudeau-election-2021/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Globe: Minority Government Impact
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="https://338canada.com/2021e.htm" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                338Canada: 2021 Model Breakdown
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
