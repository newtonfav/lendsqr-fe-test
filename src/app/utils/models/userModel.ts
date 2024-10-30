export interface IUser {
  createdAt: string;
  organisation: string;
  lastActiveDate: string;
  status: string;
  profile: IUserProfile;
  guarantor: IGuarantor;
  accountBalance: number;
  accountNumber: string;
  socials: ISocial;
  education: IEducation;
  id: string;
}

export interface IUserProfile {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface IGuarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface ISocial {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface IEducation {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [number, number];
  loanRepayment: number;
}
