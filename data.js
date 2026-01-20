// data.js

// 1. RULE SET
const broncoRules = [
    { category: "Pitching", title: "Daily Max Pitches", content: "Pitchers may pitch a maximum of 85 pitches per day. If they hit the limit during a batter, they may finish that batter.", important: true, source: "Appx A-5, Sec 5.A" },
    { category: "Pitching", title: "Rest Days (Ages 11-12)", content: "1-20: 0 Days | 21-35: 1 Day | 36-50: 2 Days | 51-65: 3 Days | 66+: 4 Days.", important: true, source: "Appx A-5, Sec 5 Table" },
    { category: "Pitching", title: "Pitcher Removal", content: "Once removed from the mound, a pitcher cannot return to pitch. Remove immediately if they hit 3 batters in one game.", important: true, source: "Appx A-5, Sec 5.A & 5.C" },
    { category: "Pitching", title: "Mound Visits", content: "Two visits in one inning = mandatory pitching change (except for injury).", important: false, source: "Appx A-5, Sec 5.B" },
    { category: "Game Time", title: "Duration & Limits", content: "Regulation: 7 innings. No new inning after 1 hr 50 mins. Hard stop 9:45 PM.", important: true, source: "Appx A-5, Sec 4" },
    { category: "Game Time", title: "Mercy Rule", content: "10 run lead after 5 complete innings (4 ½ if Home leads).", important: true, source: "Appx A-5, Sec 4.G" },
    { category: "Roster & Batting", title: "Batting Order", content: "Continuous batting order. Everyone bats.", important: false, source: "Appx A-5, Sec 6.A" },
    { category: "Roster & Batting", title: "Minimum Play", content: "No player sits 2 innings until all have sat 1. No player sits 3 until all have sat 2. Must play 1 inning in infield (Rec only).", important: true, source: "Appx A-5, Sec 4.F" },
    { category: "Base Running", title: "Courtesy Runners", content: "Allowed for Catcher w/ 2 outs. Must be last recorded out.", important: false, source: "Appx A-5, Sec 7.A" },
    { category: "Base Running", title: "Slide or Avoid", content: "Must slide or avoid contact. Malicious contact = ejection & out.", important: true, source: "Appx A-5, Sec 9" },
    { category: "Field Prep", title: "Home Team Duties", content: "Official Scorebook. Rake plate/mound. Chalk lines. Bases. Clean Home dugout.", important: false, source: "Sec XV, 1.A" },
    { category: "Field Prep", title: "Visiting Team Duties", content: "Scoreboard Operator. Drag field (End of game). Clean Visitor dugout.", important: false, source: "Sec XV, 1.B" }
];

// 2. MANUAL SCHEDULE
const manualGames = [
    { date: "SAT<br>FEB 24", opponent: "vs. Dodgers", info: "10:00 AM • Field 3 (Home)" },
    { date: "TUE<br>FEB 27", opponent: "@ Angels", info: "5:30 PM • Field 1 (Visitor)" }
];

// 3. PITCHING THRESHOLDS
const pitchThresholds = [
    { limit: 20, rest: "0 Days", next: "1 Day" },
    { limit: 35, rest: "1 Day", next: "2 Days" },
    { limit: 50, rest: "2 Days", next: "3 Days" },
    { limit: 65, rest: "3 Days", next: "4 Days" },
    { limit: 85, rest: "4 Days", next: "MAX" }
];

// 4. ROSTER (This is the part that was likely missing)
const teamRoster = [
    { name: "Jace Ingram", number: "#3" },
    { name: "Jaxson Fonseca", number: "#29" },
    { name: "JD Mayberry", number: "#51" },
    { name: "Adam Enriquez", number: "" },
    { name: "Blake Taylor", number: "" },
    { name: "Brooks Schott", number: "" },
    { name: "Declan Riley", number: "" },
    { name: "Donovan Cox", number: "" },
    { name: "Giovani Preciado", number: "" },
    { name: "Landon Hodgson", number: "" },
    { name: "Myles Gonzalez", number: "" },
    { name: "Thomas Cabral", number: "" }
];
