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

export const dateSelectonMenu = (days: number) => {

  let dateArray = [];
  for (let i = 1; i <= days; i++) {
    dateArray.push({ option: i.toString(), value: i });
  }

  return dateArray;
};
export const monthSelectonMenu = (month: number): selectMenu[] => {
  
  let monthArray: selectMenu[] = [];
  if (month == -1) {
    Object.keys(MonthEnum).forEach((key) => {
      const value = MonthEnum[key as keyof typeof MonthEnum];
      if (typeof value === 'number') {
        monthArray.push({ option: key, value: value });
      }
    });
    console.log(monthArray)
    return monthArray;
  }

  let monthDays:number;
  switch (month) {
    case MonthEnum.Feb:
      monthDays = isLeapYear(new Date().getFullYear()) ? 29 : 28;
      break;
    case MonthEnum.Apr:
    case MonthEnum.Jun:
    case MonthEnum.Sep:
    case MonthEnum.Nov:
      monthDays = 30; break;
    default:
      monthDays = 31;
  }
  Object.keys(MonthEnum).forEach((key) => {
    const value = MonthEnum[key as keyof typeof MonthEnum];
    if (typeof value === 'number') {
      if (
        monthDays == new Date(new Date().getFullYear(), value + 1, 0).getDate()
      ) {
        monthArray.push({ option: key, value: value });
      }
    }
  });
  return monthArray;
};

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export const notificationPreSelectionMenu = [
  { option: 'None', value: 'None' },
  { option: 'Email', value: 'Email' },
  { option: 'SMS', value: 'SMS' },
  { option: 'Email & SMS', value: 'Email & SMS  ' },
];

export const validationRegexes = {
  // AGE_REGEX: /^[0-9]*$/,
  EMAIL_REGEX:
    /^(?!\.)(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  // MOBILE_REGEX: /^[0-9]{10}$/,
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
};

export const recordsPerPage = [
  { option: '25 Per Page', value: 25 },
  { option: '50 Per Page', value: 50 },
  { option: '100 Per Page', value: 100 },
];

// Extend the Array interface using declaration merging
declare global {
  interface Array<T> {
    isNotEmpty(): boolean;
  }
}

// Implement the method on the Array prototype
Array.prototype.isNotEmpty = function <T>(): boolean {
  return this && this.length > 0;
};
