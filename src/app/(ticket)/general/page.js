export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hoi");
      resolve();
    }, 2000);
  });
  return <h1>You have successfully raised a general ticket.</h1>;
}
