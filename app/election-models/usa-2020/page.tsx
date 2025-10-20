import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function USA2020Page() {
  const results = [
    { candidate: "Joe Biden", party: "Democrat", electoral: 306, predicted: 306, color: "bg-blue-600" },
    { candidate: "Donald Trump", party: "Republican", electoral: 232, predicted: 232, color: "bg-red-600" },
  ]

  const swingStates = [
    { state: "Pennsylvania", electoral: 20, winner: "Biden", margin: "+1.2%", predicted: "Biden" },
    { state: "Michigan", electoral: 16, winner: "Biden", margin: "+2.8%", predicted: "Biden" },
    { state: "Wisconsin", electoral: 10, winner: "Biden", margin: "+0.7%", predicted: "Biden" },
    { state: "Georgia", electoral: 16, winner: "Biden", margin: "+0.2%", predicted: "Biden" },
    { state: "Arizona", electoral: 11, winner: "Biden", margin: "+0.3%", predicted: "Biden" },
    { state: "Nevada", electoral: 6, winner: "Biden", margin: "+2.4%", predicted: "Biden" },
    { state: "North Carolina", electoral: 15, winner: "Trump", margin: "+1.3%", predicted: "Trump" },
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
            <Badge variant="secondary">November 3, 2020</Badge>
            <Badge className="bg-green-600 text-white">89% Accuracy</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2020 US Presidential Election</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl text-pretty">
            Joe Biden defeated incumbent Donald Trump with 306 electoral votes in an election held during the COVID-19
            pandemic.
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
                The 2020 presidential election was held during the COVID-19 pandemic, which dominated the campaign and
                led to unprecedented levels of mail-in and early voting. Joe Biden won with 306 electoral votes and over
                81 million popular votes, the most in U.S. history.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Biden's victory was secured by flipping five states that Trump had won in 2016: Pennsylvania, Michigan,
                Wisconsin, Georgia, and Arizona. The election saw record turnout, with over 158 million Americans
                voting. Trump refused to concede, making baseless claims of election fraud that culminated in the
                January 6, 2021 Capitol attack.
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
                    <p className="text-2xl font-bold text-green-600">89%</p>
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
                        <span className="font-semibold text-green-600">
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

              <div className="mt-8 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-sm font-bold text-green-900">✓ Perfect Electoral Prediction</p>
                <p className="text-xs text-green-800 mt-1">
                  Our model correctly predicted 306 electoral votes for Biden, matching the exact final result. We
                  accurately forecasted all swing state outcomes including the Blue Wall restoration.
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
                      <span
                        className={`text-sm font-semibold ${state.winner === "Biden" ? "text-blue-600" : "text-red-600"}`}
                      >
                        {state.margin}
                      </span>
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
                <h4 className="font-semibold mb-2">Pandemic Election</h4>
                <p className="text-muted-foreground text-sm">
                  The 2020 election was unprecedented in being held during a global pandemic, leading to massive
                  expansion of mail-in voting and early voting. This changed how campaigns operated and how Americans
                  cast their ballots.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Record Turnout</h4>
                <p className="text-muted-foreground text-sm">
                  Over 158 million Americans voted, representing 66.8% turnout of eligible voters - the highest rate
                  since 1900. Biden received over 81 million votes, the most in U.S. history, while Trump received over
                  74 million, the second-most ever.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Blue Wall Restored</h4>
                <p className="text-muted-foreground text-sm">
                  Biden's victory in Pennsylvania, Michigan, and Wisconsin restored the "Blue Wall" that had crumbled in
                  2016, demonstrating the importance of these Rust Belt states in determining presidential elections.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Challenges to Democratic Norms</h4>
                <p className="text-muted-foreground text-sm">
                  Trump's refusal to concede and false claims of election fraud, culminating in the January 6 Capitol
                  attack, represented an unprecedented challenge to American democratic institutions and the peaceful
                  transfer of power.
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
                href="https://www.fec.gov/resources/cms-content/documents/2020presgeresults.pdf"
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
                href="https://www.pewresearch.org/politics/2020/11/13/behind-bidens-2020-victory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Pew: Pandemic Election Analysis
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="https://www.cnn.com/election/2020" target="_blank" rel="noopener noreferrer">
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
                href="https://projects.fivethirtyeight.com/2020-election-forecast/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                FiveThirtyEight: 2020 Forecast
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
