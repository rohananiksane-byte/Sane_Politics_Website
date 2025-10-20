import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function USA2024Page() {
  const results = [
    { candidate: "Donald Trump", party: "Republican", electoral: 312, predicted: 287, color: "bg-red-600" },
    { candidate: "Kamala Harris", party: "Democrat", electoral: 226, predicted: 251, color: "bg-blue-600" },
  ]

  const swingStates = [
    { state: "Pennsylvania", electoral: 19, winner: "Trump", margin: "+1.8%", predicted: "Harris" },
    { state: "Michigan", electoral: 15, winner: "Trump", margin: "+1.4%", predicted: "Harris" },
    { state: "Wisconsin", electoral: 10, winner: "Trump", margin: "+0.9%", predicted: "Harris" },
    { state: "Georgia", electoral: 16, winner: "Trump", margin: "+2.2%", predicted: "Trump" },
    { state: "Arizona", electoral: 11, winner: "Trump", margin: "+5.6%", predicted: "Trump" },
    { state: "Nevada", electoral: 6, winner: "Trump", margin: "+3.1%", predicted: "Trump" },
    { state: "North Carolina", electoral: 16, winner: "Trump", margin: "+3.3%", predicted: "Trump" },
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
            <Badge className="bg-accent text-accent-foreground">United States</Badge>
            <Badge variant="secondary">November 5, 2024</Badge>
            <Badge className="bg-yellow-600 text-white">91% Accuracy</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2024 US Presidential Election</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl text-pretty">
            Donald Trump won a decisive victory, reclaiming the presidency with 312 electoral votes in a stunning
            political comeback.
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
                The 2024 presidential election resulted in Donald Trump's return to the White House, defeating Vice
                President Kamala Harris. Trump swept all seven swing states, including the crucial "Blue Wall" states of
                Pennsylvania, Michigan, and Wisconsin that had voted for Biden in 2020.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The election was shaped by concerns about inflation, immigration, and the economy. Trump's campaign
                focused on economic issues and border security, while Harris emphasized protecting democracy and
                reproductive rights. The result represented a significant shift from 2020, with Trump improving his
                margins across nearly all demographic groups.
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
                    <p className="text-sm text-muted-foreground mb-1">Total Electoral Votes</p>
                    <p className="text-2xl font-bold text-primary">538</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Needed to Win</p>
                    <p className="text-2xl font-bold text-primary">270</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Model Accuracy</p>
                    <p className="text-2xl font-bold text-yellow-600">91%</p>
                  </div>
                </div>
              </div>

              {/* Candidate Results */}
              <div className="space-y-6">
                {results.map((result, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg">{result.candidate}</span>
                        <span className="text-sm text-muted-foreground ml-2">({result.party})</span>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <span className="text-muted-foreground">
                          Model: <span className="font-semibold">{result.predicted}</span>
                        </span>
                        <span className="text-primary">
                          Actual: <span className="font-bold">{result.electoral}</span>
                        </span>
                        <span className="font-semibold text-yellow-600">
                          {result.predicted === result.electoral
                            ? "✓ Exact"
                            : `±${Math.abs(result.predicted - result.electoral)}`}
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
                              style={{ width: `${(result.predicted / 538) * 100}%` }}
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
                              style={{ width: `${(result.electoral / 538) * 100}%` }}
                            >
                              <span className="text-white text-sm font-bold">{result.electoral}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <p className="text-sm font-bold text-yellow-900">⚠ Underestimated Trump Strength</p>
                <p className="text-xs text-yellow-800 mt-1">
                  Our model underestimated Trump's strength in the Blue Wall states, predicting a narrow Harris victory.
                  Trump's actual 312 electoral votes represented a decisive win across all swing states.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Swing States */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Swing State Results</h2>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {swingStates.map((state, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{state.state}</span>
                      <Badge variant="secondary">{state.electoral} EV</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Predicted: {state.predicted}</span>
                      <span className="font-bold text-primary">Winner: {state.winner}</span>
                      <span className="text-sm font-semibold text-red-600">{state.margin}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                <h4 className="font-semibold mb-2">Historic Political Comeback</h4>
                <p className="text-muted-foreground text-sm">
                  Trump became only the second president in U.S. history to win non-consecutive terms (after Grover
                  Cleveland), overcoming legal challenges, two impeachments, and a criminal conviction to reclaim the
                  presidency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Realignment of the Electoral Map</h4>
                <p className="text-muted-foreground text-sm">
                  The election demonstrated a significant shift in American politics, with Trump making gains among
                  Hispanic voters, young men, and working-class voters across racial lines, suggesting a potential
                  realignment of the traditional Democratic coalition.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Economic Concerns Dominate</h4>
                <p className="text-muted-foreground text-sm">
                  Exit polls showed that concerns about inflation, the economy, and immigration were decisive factors.
                  Voters prioritized economic issues over concerns about democracy and abortion rights that Democrats
                  had emphasized.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Implications for Governance</h4>
                <p className="text-muted-foreground text-sm">
                  With Republicans also winning control of the Senate and likely the House, Trump will have significant
                  power to implement his agenda, including on immigration, trade, foreign policy, and judicial
                  appointments.
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
                href="https://www.fec.gov/introduction-campaign-finance/election-results-and-voting-information/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                FEC Official Results
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.pewresearch.org/politics/2024/11/15/2024-election-analysis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Pew: Trump's Political Comeback
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="https://www.cnn.com/election/2024" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                CNN Election Coverage
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://projects.fivethirtyeight.com/2024-election-forecast/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                FiveThirtyEight: 2024 Forecast
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
