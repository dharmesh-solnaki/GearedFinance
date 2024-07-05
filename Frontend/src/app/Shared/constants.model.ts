export interface selectMenu {
  option: string;
  value: string | number;
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

export enum RoleEnum {
  GearedAdmin = 'Geared Admin',
  GearedSalesRep = 'Geared Sales Rep',
  GearedSuperAdmin = 'Geared Super Admin',
  VendorGuestUser = 'Vendor Guest User',
  VendorManager = 'Vendor Manager',
  VendorSalesRep = 'Vendor Sales Rep',
}
export enum MonthEnum {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

export const vendorSelectionMenu = [
  { option: 'Vendor 1', value: 'Vendo 1' },
  { option: 'Vendor 2', value: 'Vendor 2' },
  { option: 'Vendor 3', value: 'Vendor 3' },
];

export const roleSelectionMenu = [
  { option: RoleEnum.GearedAdmin, value: RoleEnum.GearedAdmin },
  {
    option: RoleEnum.GearedSalesRep,
    value: RoleEnum.GearedSalesRep,
  },
  {
    option: RoleEnum.GearedSuperAdmin,
    value: RoleEnum.GearedSuperAdmin,
  },
  {
    option: RoleEnum.VendorGuestUser,
    value: RoleEnum.VendorGuestUser,
  },
  {
    option: RoleEnum.VendorManager,
    value: RoleEnum.VendorManager,
  },
  {
    option: RoleEnum.VendorSalesRep,
    value: RoleEnum.VendorSalesRep,
  },
];

export const dateSelectonMenu = () => {
  let dateArray = [];
  for (let i = 1; i <= 31; i++) {
    dateArray.push({ option: i.toString(), value: i });
  }
  return dateArray;
};
export const monthSelectonMenu = ():selectMenu[] => {
  let monthArray:selectMenu[] = [];

  Object.keys(MonthEnum).forEach((key) => {
    const value = MonthEnum[key as keyof typeof MonthEnum];
    if (typeof value === 'number') {
      monthArray.push({ option: key, value: value });
    }
  });
  return monthArray;
};

export const notificationPreSelectionMenu = [
  { option: 'None', value: 'None' },
  { option: 'Email', value: 'Email' },
  { option: 'SMS', value: 'SMS' },
  { option: 'Email & SMS', value: 'Email & SMS  ' },
];

