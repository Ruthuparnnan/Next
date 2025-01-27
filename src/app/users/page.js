import axios from "axios";

async function Page() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response?.data || [];
  return (
    <>
      {users?.map((user) => (
        <div key={user?.id}>{user?.name}</div>
      ))}
    </>
  );
}

export default Page;
