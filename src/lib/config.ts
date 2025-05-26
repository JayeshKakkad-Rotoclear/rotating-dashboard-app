export type Dashboard = {
  name: string;
  url: string;
  duration: number; // in seconds
};

export const dashboards: Dashboard[] = [
  {
    name: 'Grafana - Inventory Panel 1',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=now-30d&to=now&panelId=11&__feature.dashboardSceneSolo',
    duration: 11
  },
  {
    name: 'Monday - Weekly Plan',
    url: 'https://view.monday.com/embed/8562341867-58e6804646b6190a6624744e077d0388?r=use1',
    duration: 10
  },
  {
    name: 'Salesforce - Delivery Overview',
    url: 'http://10.50.9.16:3000/d-solo/felr9tnck43r4b/bestande-fertigteile-rotoclear-s3?orgId=1&from=1745673437505&to=1748265437505&timezone=browser&panelId=11&__feature.dashboardSceneSolo',
    duration: 10
  }
  // Add more panels here
];
