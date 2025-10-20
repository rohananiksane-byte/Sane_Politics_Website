"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Calendar, MapPin, ExternalLink, Globe } from "lucide-react"
import { useState } from "react"

const boliviaElection = {
  country: "Bolivia",
  title: "Bolivian Presidential Runoff 2025",
  date: "October 19, 2025",
  status: "Completed",
  image: "/bolivia-election-plaza.jpg",
  description:
    "Centrist senator Rodrigo Paz won Bolivia's presidency with 54% of the vote, ending 20 years of rule by the Movement Toward Socialism party amid economic turmoil and voter frustration.",
  candidates: [
    { name: "Rodrigo Paz (Centrist)", percentage: 54, color: "bg-blue-600" },
    { name: "Jorge 'Tuto' Quiroga (Right-wing)", percentage: 45, color: "bg-orange-600" },
  ],
  whatsAtStake: [
    "Rodrigo Paz elected President, ending 20 years of MAS party rule",
    "Plans to end fixed exchange rate and phase out fuel subsidies",
    "Will maintain social benefits while implementing gradual free-market reforms",
  ],
  significance: [
    "First major political change since Evo Morales' 2005 election",
    "Paz inherits an economy in crisis with 23% inflation and dollar shortages",
    "Victory reflects voter frustration with economic mismanagement",
  ],
  resultDate: "Final Results - October 20, 2025",
  turnout: "Voter turnout data pending official certification",
}

const germanElection = {
  country: "Germany",
  title: "German Federal Election 2025",
  date: "February 23, 2025",
  status: "Completed",
  image: "/german-bundestag-parliament.jpg",
  description:
    "The CDU/CSU won Germany's federal election with 28.5% of the vote, with Friedrich Merz set to become Chancellor. The AfD became the second-largest party at 20.8%, marking a significant shift in German politics.",
  whatsAtStake: [
    "Friedrich Merz (CDU/CSU) elected Chancellor with 28.5% of vote",
    "AfD became second-largest party, reflecting rising populist sentiment",
    "Coalition negotiations ongoing between CDU/CSU and potential partners",
  ],
  significance: [
    "Return to center-right governance in Europe's largest economy",
    "Historic strong showing for AfD raises questions about German politics",
    "Will shape EU policy on climate, defense, and foreign relations",
  ],
  polls: [
    { party: "CDU/CSU", percentage: 28.5, color: "bg-black" },
    { party: "AfD", percentage: 20.8, color: "bg-blue-600" },
    { party: "SPD", percentage: 16.4, color: "bg-red-600" },
    { party: "Greens", percentage: 11.6, color: "bg-green-600" },
    { party: "The Left", percentage: 8.8, color: "bg-purple-600" },
    { party: "BSW", percentage: 5.0, color: "bg-red-800" },
    { party: "Others", percentage: 4.6, color: "bg-gray-400" },
    { party: "FDP", percentage: 4.3, color: "bg-yellow-500" },
  ],
  pollDate: "Final Results - February 23, 2025",
  turnout: "82.5%",
}

const upcomingElections = [
  {
    country: "Bolivia",
    type: "Presidential Election (2nd Round)",
    date: "October 19, 2025",
    region: "South America",
    link: "https://www.aljazeera.com/news/2025/10/20/bolivia-elects-centre-right-rodrigo-paz-as-president",
  },
  {
    country: "Estonia",
    type: "Local Government Council Elections",
    date: "October 19, 2025",
    region: "Europe",
    link: "https://europeelects.eu/2025/10/07/estonia-local-elections-uncharted/",
  },
  {
    country: "Colombia",
    type: "Municipal and Local Youth Councils",
    date: "October 19, 2025",
    region: "South America",
    link: "https://macroattachment.cloud.itau.com.br/attachments/5d8d837f-5056-4e20-9b4b-a28673aa516f/Colombia_Elections_Oct2025.pdf",
  },
  {
    country: "Ireland",
    type: "Presidential Election",
    date: "October 24, 2025",
    region: "Europe",
    link: "https://www.rte.ie/news/analysis-and-comment/2025/1019/1539423-presidential-election-analysis/",
  },
  {
    country: "Côte d'Ivoire",
    type: "Presidential Election (TBD)",
    date: "October 25, 2025",
    region: "Africa",
    link: "https://www.iris-france.org/en/candidates-for-the-2025-presidential-election-in-cote-divoire/",
  },
  {
    country: "Argentina",
    type: "Legislative (Midterm) & Provincial Elections",
    date: "October 26, 2025",
    region: "South America",
    link: "https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2025)777955",
  },
  {
    country: "Cameroon",
    type: "Parliamentary Election (TBD)",
    date: "November 2025",
    region: "Africa",
    link: "https://www.tournonslapage.org/en/actualites/elections-de-2025-au-cameroun-trois-organisations-exigent-des-reformes",
  },
  {
    country: "Kosovo",
    type: "Local Elections for Mayors (2nd Round)",
    date: "November 9, 2025",
    region: "Europe",
    link: "https://apnews.com/article/kosovo-municipal-election-preliminary-results-serbia-runoffs-187f0933bc62c41d7f4daf4ddbfad78e",
  },
  {
    country: "Iraq",
    type: "Parliamentary Elections",
    date: "November 11, 2025",
    region: "Asia",
    link: "https://www.aljazeera.com/news/2025/10/19/in-iraq-will-muqtada-al-sadrs-endgame-of-power-work",
  },
]

export default function ElectionModelsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All")
  const regions = ["All", "Europe", "Asia", "South America", "Middle East", "Africa", "North America"]

  const filteredElections =
    selectedRegion === "All"
      ? upcomingElections
      : upcomingElections.filter((election) => election.region === selectedRegion)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Election Models</h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Data-driven predictions and analysis of elections around the world
          </p>
        </div>
      </section>

      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Election to Watch</h2>
          </div>
          <Card className="max-w-6xl mx-auto border-primary/20 shadow-lg">
            <CardHeader className="pb-3">
              <div className="h-40 relative overflow-hidden rounded-lg mb-3">
                <img
                  src={boliviaElection.image || "/placeholder.svg?height=200&width=1200&query=Bolivia election plaza"}
                  alt={boliviaElection.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Badge className="bg-accent text-accent-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {boliviaElection.country}
                </Badge>
                <Badge variant="secondary">
                  <Calendar className="h-3 w-3 mr-1" />
                  {boliviaElection.date}
                </Badge>
                <Badge variant="outline" className="border-green-600 text-green-600">
                  {boliviaElection.status}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-primary mb-2">{boliviaElection.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{boliviaElection.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-primary/10">
                  <h4 className="font-semibold mb-1 text-foreground text-base">Final Results</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {boliviaElection.resultDate} • {boliviaElection.turnout}
                  </p>
                  <div className="space-y-3">
                    {boliviaElection.candidates.map((candidate, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{candidate.name}</span>
                          <span className="font-bold text-primary text-lg">{candidate.percentage}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-5 overflow-hidden shadow-inner">
                          <div
                            className={`h-full ${candidate.color} transition-all duration-500 flex items-center justify-end pr-2`}
                            style={{ width: `${candidate.percentage}%` }}
                          >
                            <span className="text-white text-xs font-semibold">{candidate.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Result Summary:</strong> Rodrigo Paz won with 54% of the vote,
                      defeating Jorge "Tuto" Quiroga who received 45%. This marks the end of 20 years of Movement Toward
                      Socialism (MAS) party rule in Bolivia.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-background shadow-sm flex-1">
                    <h4 className="font-semibold mb-2 text-foreground text-base flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1.5">
                      {boliviaElection.whatsAtStake.map((stake, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2 font-bold">•</span>
                          <span>{stake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-background shadow-sm flex-1">
                    <h4 className="font-semibold mb-2 text-foreground text-base flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Significance
                    </h4>
                    <ul className="space-y-1.5">
                      {boliviaElection.significance.map((item, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2 font-bold text-xs">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Learn More</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.npr.org/2025/10/20/nx-s1-5580091/rodrigo-paz-bolivia-president"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      NPR: Election Results & Analysis
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.as-coa.org/articles/poll-tracker-bolivias-2025-presidential-runoff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      AS/COA Poll Tracker
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Recent Elections</h2>
          </div>
          <Card className="max-w-6xl mx-auto border-primary/20 shadow-lg">
            <CardHeader className="pb-3">
              <div className="h-40 relative overflow-hidden rounded-lg mb-3">
                <img
                  src={germanElection.image || "/placeholder.svg?height=200&width=1200&query=German Bundestag"}
                  alt={germanElection.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Badge className="bg-accent text-accent-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {germanElection.country}
                </Badge>
                <Badge variant="secondary">
                  <Calendar className="h-3 w-3 mr-1" />
                  {germanElection.date}
                </Badge>
                <Badge variant="outline" className="border-green-600 text-green-600">
                  {germanElection.status}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-primary mb-2">{germanElection.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{germanElection.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-primary/10">
                  <h4 className="font-semibold mb-1 text-foreground text-base">Final Results</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {germanElection.pollDate} • Turnout: {germanElection.turnout}
                  </p>
                  <div className="space-y-2">
                    {germanElection.polls.map((poll, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-xs">{poll.party}</span>
                          <span className="font-bold text-primary text-sm">{poll.percentage}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden shadow-inner">
                          <div
                            className={`h-full ${poll.color} transition-all duration-500`}
                            style={{ width: `${poll.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-background shadow-sm flex-1">
                    <h4 className="font-semibold mb-2 text-foreground text-base flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Key Outcomes
                    </h4>
                    <ul className="space-y-1.5">
                      {germanElection.whatsAtStake.map((stake, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2 font-bold">•</span>
                          <span>{stake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-2 border-primary/20 rounded-lg p-4 bg-background shadow-sm flex-1">
                    <h4 className="font-semibold mb-2 text-foreground text-base flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Significance
                    </h4>
                    <ul className="space-y-1.5">
                      {germanElection.significance.map((item, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2 font-bold text-xs">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Sources & Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.dw.com/en/german-election-results-explained-in-graphics/a-71724186"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      DW: Results Explained in Graphics
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.politico.eu/europe-poll-of-polls/germany/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Politico: Germany Poll of Polls
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Upcoming Elections Worldwide</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Track major elections happening around the world in 2025. Filter by region to explore upcoming democratic
            processes.
          </p>

          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className={
                  selectedRegion === region
                    ? ""
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {region}
              </Button>
            ))}
          </div>

          {/* Elections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredElections.map((election, idx) => (
              <Card key={idx} className="border-primary/20 hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{election.region}</Badge>
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{election.country}</CardTitle>
                  <CardDescription className="text-sm">{election.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {election.date}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent mt-auto"
                    asChild
                  >
                    <a href={election.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a
                href="https://www.aweb.org/eng/bbs/B0000007/list.do?menuNo=300052"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Election Calendar
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Methodology</CardTitle>
              <CardDescription className="text-base">How we build accurate election models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Data Sources</h4>
                <p className="text-muted-foreground">
                  We aggregate polling data from reputable sources, historical voting patterns, demographic trends, and
                  economic indicators to build comprehensive models.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Statistical Methods</h4>
                <p className="text-muted-foreground">
                  Our models use weighted polling averages, Bayesian inference, and Python-based statistical analysis to
                  generate probabilistic forecasts with confidence intervals.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Transparency</h4>
                <p className="text-muted-foreground">
                  All our models are open-source, and we publish detailed methodology including Python scripts
                  explaining our approach, assumptions, and limitations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
