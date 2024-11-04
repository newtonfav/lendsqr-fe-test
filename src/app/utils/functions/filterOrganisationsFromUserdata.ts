import { IUser } from "../../models/userModel";

function filterOrganisationsFromUserdata(data: IUser[]) {
  // Use Set to filter out unique organisations
  const uniqueOrganisationsSet = new Set(data.map((user) => user.organisation));

  // Convert Set back to Array
  return Array.from(uniqueOrganisationsSet);
}

export default filterOrganisationsFromUserdata;
