import { loginData } from "./data";

export async function GET() {
  return Response.json(loginData);
}
