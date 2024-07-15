export class User {
  constructor(
    public name: string,
    public surName: string,
    public email: string,
    public mobile: string,
    public password?: string,
    public notificationPreferences: number = 0,
    public status: boolean = true,
    public isPortalLogin?: boolean,
    public isUserInGafsalesRepList?: boolean,
    public dayOfBirth?: number,
    public monthOfBirth?: number,
    public relationshipManager?: number,
    public reportingTo?: number,
    public isUserInVendorSalesRepList?: boolean,
    public unassignedApplications?: boolean,
    public roleName?: number,
    public isSendEndOfTermReport?: boolean,
    public isFunderProfile?: boolean,
    public isProceedBtnInApp?: boolean,
    public isCalcRateEditor?: boolean
  ) //vendor
  //vendorManagerLevel
  {}
}
