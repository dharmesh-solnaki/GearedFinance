export interface selectMenu {
   option:string,
   value:string|number,
}

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
  GearedAdmin = 'Geared Admin',
  GearedSalesRep = 'Geared Sales Rep',
  GearedSuperAdmin = 'Geared Super Admin',
  VendorGuestUser = 'Vendor Guest User',
  VendorManager = 'Vendor Manager',
  VendorSalesRep = 'Vendor Sales Rep',
}

export const vendorSelectionMenu = [
  { option: 'Vendor 1', value: 1 },
  { option: 'Vendor 2', value: 2 },
  { option: 'Vendor 3', value: 3 },
];

export const roleSelectionMenu = [
  { option: selectionRoles.GearedAdmin, value: selectionRoles.GearedAdmin },
  {
    option: selectionRoles.GearedSalesRep,
    value: selectionRoles.GearedSalesRep,
  },
  {
    option: selectionRoles.GearedSuperAdmin,
    value: selectionRoles.GearedSuperAdmin,
  },
  {
    option: selectionRoles.VendorGuestUser,
    value: selectionRoles.VendorGuestUser,
  },
  {
    option: selectionRoles.VendorManager,
    value: selectionRoles.VendorManager,
  },
  {
    option: selectionRoles.VendorSalesRep,
    value: selectionRoles.VendorSalesRep,
  },
];

export const dateSelectonMenu = () => {
  let dateArray = [];
  for (let i = 1; i <= 31; i++) {
    dateArray.push({ option: i.toString(), value: i });
  }
  return dateArray;
};
export const monthSelectonMenu = [
  { option: 'Jan', value: 'January' },
  { option: 'Feb', value: 'February' },
  { option: 'Mar', value: 'March' },
  { option: 'Apr', value: 'April' },
  { option: 'May', value: 'May' },
  { option: 'Jun', value: 'June' },
  { option: 'Jul', value: 'July' },
  { option: 'Aug', value: 'August' },
  { option: 'Sep', value: 'September' },
  { option: 'Oct', value: 'October' },
  { option: 'Nov', value: 'November' },
  { option: 'Dec', value: 'December' },
];

export const notificationPreSelectionMenu = [
  // { option: 'None', value: 0 },
  { option: 'Email', value: 1 },
  { option: 'SMS', value: 2 },
  { option: 'Email & SMS', value: 3 },
];
