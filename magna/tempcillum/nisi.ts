// Assuming fetchUsers is a function that fetches user data from an API
async function fetchUsers(): Promise<User[]> {
  // Implementation of fetchUsers which returns a promise of User array
  // ...
}

// Using the provided type to define the return type of an async function
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

// Example usage of FetchUsersReturnType in an async function
async function getUsers(): FetchUsersReturnType {
  return await fetchUsers();
}
