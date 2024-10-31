export type Status = "inactive" | "pending" | "blacklisted" | "active";

export const REVERSE_STATUS_MAP: Record<Status, number[]> = {
  inactive: [0, 1, 2],
  pending: [3, 4, 5],
  blacklisted: [6, 7],
  active: [8, 9],
};

export const getApiValuesForStatus = (status: Status): number[] => {
  return REVERSE_STATUS_MAP[status];
};
