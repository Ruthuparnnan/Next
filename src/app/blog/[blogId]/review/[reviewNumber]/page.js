async function Page({ params }) {
  const { blogId, reviewNumber } = await params;
  return (
    <div>{`blog number - ${blogId} and review number - ${reviewNumber}`}</div>
  );
}

export default Page;
