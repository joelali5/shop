import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <SignUp routing="path" path="/signup" />
    </div>
  );
}

export default Signup;
