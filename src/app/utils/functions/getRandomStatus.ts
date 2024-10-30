enum Status {
  active = "active",
  inactive = "inactive",
  pending = "pending",
  blacklisted = "blacklisted",
}

export default function getRandomStatus(): Status {
  // Convert enum values to an array
  const statuses = Object.values(Status) as Status[];

  // Generate a random index based on the array length
  const randomIndex = Math.floor(Math.random() * statuses.length);

  // Return the random status
  return statuses[randomIndex];
}
