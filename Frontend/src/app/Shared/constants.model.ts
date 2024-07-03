export const menuBarItems = [
  {
    menuItem: 'Dashboard',
    imagePath: '../../assets/Images/icon-home.svg',
    routerPath: '/dashboard',
  },
  {
    menuItem: 'Applications',
    imagePath: '../../assets/Images/icon-applications.svg',
    routerPath: '/applications',
  },
  {
    menuItem: 'Clients',
    imagePath: '../../assets/Images/icon-clients.svg',
    routerPath: '/clients',
  },
  {
    menuItem: 'Funders',
    imagePath: '../../assets/Images/icon-funder.svg',
    routerPath: '/funders',
  },
  {
    menuItem: 'Vendors',
    imagePath: '../../assets/Images/icon-vendors.svg',
    routerPath: '/vendors',
  },
  {
    menuItem: 'Settings',
    imagePath: '../../assets/Images/icon-settings.svg',
    routerPath: '/settings',
  },
];

export const settingSystemProperties = [
  'Role Permission',
  'Funding categories',
  'Vendor industries',
  'Geared doc fee ',
  'Vendor rate charts',
  'Clients in arrears',
  'Delete a deal',
  'Configuration',
  'Privacy funder list',
  'Website Calculator',
];

export const settingsSalesAndMarketing = [
  'Email Management',
  'Templates',
  'SMS Template',
  'Vendor user links',
];

export enum selectionRoles {
  GearedAdmin='Geared Admin',
  GearedSalesRep = 'Geared Sales Rep',
  GearedSuperAdmin = 'Geared Super Admin',
  VendorGuestUser = 'Vendor Guest User',
  VendorManager = 'Vendor Manager',
  VendorSalesRep = 'Vendor Sales Rep',
}




