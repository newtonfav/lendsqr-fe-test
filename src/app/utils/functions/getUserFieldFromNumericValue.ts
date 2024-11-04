import {
  Gender,
  MaritalStatus,
  Relationship,
  ResidenceType,
} from "../../models/enums";

export type Status = "inactive" | "pending" | "blacklisted" | "active";

export const STATUS_MAP: Record<number, Status> = {
  0: "inactive",
  1: "inactive",
  2: "inactive",
  3: "pending",
  4: "pending",
  5: "pending",
  6: "blacklisted",
  7: "blacklisted",
  8: "active",
  9: "active",
};

export const getStatusFromApiValue = (value: number): Status => {
  if (value < 0 || value > 9) {
    throw new Error("Invalid API value");
  }
  return STATUS_MAP[value];
};

export function getGenderFromNumericValue(value: string): Gender {
  const number = parseInt(value);

  if (number % 2 === 0) return Gender.male;
  return Gender.female;
}

export function getRelationshipFromNumericValue(value: string): Relationship {
  const number = parseInt(value);

  if (number >= 0 && number <= 2) return Relationship.sister;
  if (number >= 3 && number <= 5) return Relationship.brother;
  if (number >= 6 && number <= 7) return Relationship.father;
  if (number >= 8 && number <= 9) return Relationship.mother;
  else return Relationship.brother;
}

export function getResidenceType(value: string): ResidenceType {
  const number = parseInt(value);

  if (number >= 0 && number <= 2) return ResidenceType.villa;
  if (number >= 3 && number <= 5) return ResidenceType.townhouse;
  if (number >= 6 && number <= 7) return ResidenceType.apartment;
  if (number >= 8 && number <= 9) return ResidenceType.duplex;
  else return ResidenceType.villa;
}

export function getMaritalStatus(value: string): MaritalStatus {
  const number = parseInt(value);

  if (number >= 0 && number <= 3) return MaritalStatus.single;
  if (number >= 4 && number <= 6) return MaritalStatus.married;
  if (number >= 7 && number <= 9) return MaritalStatus.relationship;
  else return MaritalStatus.relationship;
}
