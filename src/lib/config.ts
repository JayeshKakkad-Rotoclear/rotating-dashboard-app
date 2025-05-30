export type Dashboard = {
  name: string;
  url: string;
  duration: number; // in seconds
};

export const dashboards: Dashboard[] = [
  {
    name: 'Fertigungslinie - Stator',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745737539654&to=1748329539654&timezone=browser&panelId=6&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Fertigungslinie - Rotor (normal)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745737539654&to=1748329539654&timezone=browser&panelId=9&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Fertigungslinie - Rotor (beschichtet)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745737539654&to=1748329539654&timezone=browser&panelId=10&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Bestand Fertigteile',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745737539654&to=1748329539654&timezone=browser&panelId=11&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Bestände Zubehör (EF)',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745737539654&to=1748329539654&timezone=browser&panelId=5&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Bestand Kameraköpfe',
    url: 'http://10.50.9.16:3000/d-solo/cemk4ri0j73eoa/bestande-fertigteile-rotoclear-c-linie?orgId=1&from=1745767022679&to=1748359022679&timezone=browser&panelId=11&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'Bestände Steuerrechner',
    url: 'http://10.50.9.16:3000/d-solo/cemk4ri0j73eoa/bestande-fertigteile-rotoclear-c-linie?orgId=1&from=1745767022679&to=1748359022679&timezone=browser&panelId=12&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'S3 Diagnose',
    url: 'http://10.50.9.16:3000/d-solo/aeluj7kgw7q4gd/kennzahlen?orgId=1&from=1748337533643&to=1748359133643&timezone=browser&panelId=3&__feature.dashboardSceneSolo',
    duration: 10
  },
  {
    name: 'C2 Diagnose',
    url: 'http://10.50.9.16:3000/d-solo/aeluj7kgw7q4gd/kennzahlen?orgId=1&from=1748337533643&to=1748359133643&timezone=browser&panelId=4&__feature.dashboardSceneSolo',
    duration: 10
  }
];
