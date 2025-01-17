export default function Page() {
  const number = (Math.random() * 2).toFixed(0);
  console.log("number", number);
  if (number == 0) throw new Error("Gig worker died");
  return <h1>Your asset request successfully placed.</h1>;
}
