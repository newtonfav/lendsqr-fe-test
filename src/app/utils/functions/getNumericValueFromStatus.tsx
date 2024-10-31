import { Status } from "../models/enums";

const statusToNumeric: Record<Status, number> = {
  [Status.active]: 0, // Map "Active" to 0
  [Status.inactive]: 3, // Map "Inactive" to 3
  [Status.pending]: 6, // Map "Pending" to 6
  [Status.blacklisted]: 8, // Map "Blacklisted" to 8
};

export function getNumericValueFromStatus(status: Status): number {
  return statusToNumeric[status] ?? 3; // Default to 3 for unknown status
}
