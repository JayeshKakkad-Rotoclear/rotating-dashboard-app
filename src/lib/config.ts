export type Dashboard = {
  name: string;
  url: string;
  duration: number; // in seconds
};

export const dashboards: Dashboard[] = [
  {
    name: 'Fertigungslinie - Stator',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&panelId=6&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Fertigungslinie - Rotor (normal)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&panelId=9&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Fertigungslinie - Rotor (beschichtet)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&panelId=10&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Bestand Fertigteile',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&panelId=11&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Bestände Zubehör (EF)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&panelId=5&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Bestand Kameraköpfe',
    url: 'http://10.50.9.16:3000/d-solo/cemk4ri0j73eoa/bestande-fertigteile-rotoclear-c-linie?orgId=1&panelId=11&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Bestände Steuerrechner',
    url: 'http://10.50.9.16:3000/d-solo/cemk4ri0j73eoa/bestande-fertigteile-rotoclear-c-linie?orgId=1&panelId=12&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'S3 Diagnose',
    url: 'http://10.50.9.16:3000/d-solo/aeluj7kgw7q4gd/kennzahlen?orgId=1&panelId=3&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'C2 Diagnose',
    url: 'http://10.50.9.16:3000/d-solo/aeluj7kgw7q4gd/kennzahlen?orgId=1&panelId=4&__feature.dashboardSceneSolo',
    duration: 30
  },
  {
    name: 'Wöchentliche Ziele Aktuelle Woche',
    url: 'https://www.canva.com/design/DAGqOtTMIXE/lYSkFpokUCaIPtYdGkFEiA/view?embed',
    duration: 30
  },
  {
    name: 'Wöchentliche Ziele Letzte Woche',
    url: 'https://www.canva.com/design/DAGqOrssNBw/0y2OOOBZZjY59XUOS6AQOg/view?embed',
    duration: 30
  }
];
