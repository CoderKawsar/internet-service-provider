export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  isError: true;
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IUserInfo = {
  exp: number;
  iat: number;
  id: string;
  role: string;
};

export type ICoverageDistrict = {
  id: string;
  district: string;
  createdAt: Date;
  updateAt?: Date;
};

export type ICoverageUpazillaOrThana = {
  id: string;
  upazillaOrThana: string;
  districtId: string;
  createdAt: Date;
  updateAt?: Date;
};

export type ICoverageArea = {
  id: string;
  upazillaOrThanaId: string;
  area: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type IStreamingService = {
  id: string;
  service: string;
  photoURL: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type IStreamingServicesForPackage = {
  id: string;
  packageId: string;
  streamingServiceId: string;
  streamingService: IStreamingService;
  createdAt: string;
  updatedAt: string;
};

export type IPackage = {
  id: string;
  speed: number;
  fee: number;
  noOfPublicIP: number;
  talkTime: number;
  OTCFee: number;
  noOfStreamingService: number;
  createdAt: Date;
  updateAt: Date;
  StreamingServicesForPackage: any[];
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  contactNo: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ICustomer = {
  id: string;
  userId: string;
  packageId: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
};
