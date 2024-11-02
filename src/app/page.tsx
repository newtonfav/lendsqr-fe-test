import { redirect } from "next/navigation";

export default function Page() {
  // Redirects to /login whenever this page is accessed
  return redirect("/login");
}
