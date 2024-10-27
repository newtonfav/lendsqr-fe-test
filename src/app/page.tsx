import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirects to /login whenever this page is accessed
  return redirect("/login");
}
