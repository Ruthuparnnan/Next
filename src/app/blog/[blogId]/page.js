async function Page({ params }) {
  const blogId = await params?.blogId;
  return <div>Dynamic Route {blogId}</div>;
}

export default Page;
