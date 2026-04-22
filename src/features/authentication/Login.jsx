import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <SignIn routing="path" path="/login" />
    </div>
  );
}

export default Login;
