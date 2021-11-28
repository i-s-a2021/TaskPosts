export const childRoutes = [
  {
    path:'dashboard',
    loadChildren: () =>  import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {icon: 'dashboard', text: 'Dashboard'}
  },
  {
    path:'posts',
    data: {icon: 'table_chart', text: 'Posts'}
  }
  // {
  //   path:'charts',
  //   data: {icon: 'bar_chart', text: 'Charts'}
  // },
  // {
  //   path:'slider',
  //   data: {icon: 'slideshow', text: 'Slider'}
  // },
  // {
  //   path:'list',
  //   data: {icon: 'list', text: 'Lists'}
  // },
  // {
  //   path:'mat-components',
  //   data: {icon: 'assignment', text: 'Forms'}
  // },
  // {
  //   path:'forms',
  //   data: {icon: 'assignment', text: 'Forms'}
  // },
  // {
  //   path:'animations',
  //   data: {icon: 'perm_media', text: 'Animations'}
  // },
  // {
  //   path:'typography',
  //   data: {icon: 'font_download', text: 'Typography'}
  // },
  // {
  //   path:'google-maps',
  //   data: {icon: 'place', text: 'Typography'}
  // },
  // {
  //   path:'mar-grid',
  //   data: {icon: 'grid_on', text: 'Flex Grid'}
  // }
]
