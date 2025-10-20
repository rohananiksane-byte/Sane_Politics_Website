import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Canada2025Page() {
  const results = [
    { party: "Liberal", seats: 172, predicted: 168, color: "bg-red-600" },
    { party: "Conservative", seats: 119, predicted: 122, color: "bg-blue-600" },
    { party: "Bloc Québécois", seats: 32, predicted: 31, color: "bg-cyan-600" },
    { party: "NDP", seats: 10, predicted: 12, color: "bg-orange-600" },
    { party: "Green", seats: 5, predicted: 5, color: "bg-green-600" },
  ]

  const keyComponents = [
    { region: "Ontario", impact: "Decisive battleground - 121 seats", outcome: "Liberal resurgence in GTA suburbs" },
    { region: "Quebec", impact: "Split between parties - 78 seats", outcome: "Liberals regained Montreal strongholds" },
    { region: "Atlantic Canada", impact: "Liberal fortress - 32 seats", outcome: "Liberals swept all four provinces" },
    {
      region: "Western Canada",
      impact: "Conservative stronghold - 104 seats",
      outcome: "Conservatives dominated prairies",
    },
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
            <Badge variant="secondary">April 28, 2025</Badge>
            <Badge className="bg-green-600 text-white">91% Accuracy</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2025 Canadian Federal Election</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl text-pretty">
            The Liberals under Mark Carney secured a fourth consecutive mandate with a slim majority, marking a dramatic
            turnaround after trailing badly in polls just months before the election.
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
                The 2025 election delivered a stunning upset as Mark Carney led the Liberals to their fourth consecutive
                mandate, defying polls that had predicted a Conservative majority just months earlier. Carney, the
                former Bank of Canada and Bank of England governor, took over Liberal leadership after Justin Trudeau's
                resignation and successfully reframed the election around economic competence and stability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The campaign saw a dramatic shift in momentum after Carney's strong debate performances and his detailed
                economic plan resonated with suburban voters concerned about affordability. The Liberals made
                significant gains in the Greater Toronto Area and held their Atlantic Canada fortress, while the NDP
                collapsed to historic lows with just 5% of the popular vote, leading to Jagmeet Singh's resignation as
                party leader.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pierre Poilievre's Conservatives, despite maintaining their Western base, failed to make the
                breakthrough in Ontario suburbs that was essential for victory. The result raises questions about
                Poilievre's future as Conservative leader and represents a remarkable political comeback for the Liberal
                Party.
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
                    <p className="text-2xl font-bold text-green-600">91%</p>
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
                <p className="text-sm font-bold text-green-900">✓ Accurate Majority Prediction</p>
                <p className="text-xs text-green-800 mt-1">
                  Our model predicted 168 Liberal seats vs. 172 actual - accurately forecasting a slim Liberal majority
                  and capturing the late-campaign momentum shift toward Carney's Liberals.
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
                <h4 className="font-semibold mb-2">Historic Liberal Comeback</h4>
                <p className="text-muted-foreground text-sm">
                  The election represents one of the most dramatic political comebacks in Canadian history, with the
                  Liberals recovering from double-digit polling deficits to secure a fourth consecutive mandate under
                  new leadership, demonstrating the power of leadership renewal and economic messaging.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mark Carney's Transformative Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Mark Carney's victory validates his transition from central banking to politics and establishes him as
                  a major figure in Canadian political life. His economic credentials and technocratic approach
                  resonated with voters seeking stability and competence in uncertain times.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">NDP Collapse and Political Realignment</h4>
                <p className="text-muted-foreground text-sm">
                  The NDP's historic collapse to just 5% of the popular vote and 10 seats marks a potential realignment
                  of Canadian politics, with progressive voters consolidating behind the Liberals and raising questions
                  about the NDP's future viability as a major federal party.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Conservative Leadership Questions</h4>
                <p className="text-muted-foreground text-sm">
                  Pierre Poilievre's failure to capitalize on Liberal vulnerabilities and convert polling leads into
                  victory will likely trigger internal Conservative party debates about leadership and strategy, with
                  questions about whether his populist approach can win over suburban swing voters.
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
                href="https://www.theglobeandmail.com/politics/federal-election/2025-results/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Globe and Mail: Full Election Results
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.theglobeandmail.com/politics/article-liberals-projected-to-return-to-power-with-fourth-consecutive-mandate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Liberals Return to Power with Fourth Mandate
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.theglobeandmail.com/politics/article-ndp-party-performance-singh-2025-election/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Jagmeet Singh to Resign as NDP Leader
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.theglobeandmail.com/politics/article-conservative-party-performance-poilievre-2025-election/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Voters Opted Against Conservative Change
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
