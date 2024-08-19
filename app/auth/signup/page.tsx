import { authenticate } from "@/app/lib/actions";
import Signup from "../components/signup";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="mt-24">
        <Signup />
      </div>
    </div>
  );
}
