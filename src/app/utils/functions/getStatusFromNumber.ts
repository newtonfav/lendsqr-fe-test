enum Status {
  active = "active",
  inactive = "inactive",
  pending = "pending",
  blacklisted = "blacklisted",
}

export default function getStatusFromNumericValue(value: string): Status {
  const number = parseInt(value);

  if (number >= 0 && number <= 2) return Status.active;
  if (number >= 3 && number <= 5) return Status.inactive;
  if (number >= 6 && number <= 7) return Status.pending;
  if (number >= 8 && number <= 9) return Status.blacklisted;
  else return Status.inactive;
}
