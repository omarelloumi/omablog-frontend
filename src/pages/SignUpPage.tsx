import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/services/UserService.tsx";
import SmallSpinner from "@/components/ui/SmallSpinner";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

type SignupFormValues = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm<SignupFormValues>();
  const { errors } = formState;

  const password = watch("password");

  const mutation = useMutation({
    mutationFn: (data: SignupFormValues) => {

        return registerUser(data)
    },
    onSuccess: () => {
      toast.success("You have successfully created an account!!!");
      reset();
    }
  });

  function onSubmit(data: SignupFormValues) {
    mutation.mutate(data);
  }

  return (
    <form
      className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit
                      rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">SignUp Form</h3>
        <p>Create your account to get started!</p>
      </div>

      <div>
        <Label htmlFor="username" className="dark:text-[97989F]">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.username?.message && (
          <small className="text-red-700">{errors.username.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          {...register("first_name", {
            required: "Firstname is required",
            minLength: {
              value: 3,
              message: "Firstname must be at least 3 characters",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.first_name?.message && (
          <small className="text-red-700">{errors.first_name.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          {...register("last_name", {
            required: "Lastname is required",
            minLength: {
              value: 3,
              message: "Lastname must be at least 3 characters",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.last_name?.message && (
          <small className="text-red-700">{errors.last_name.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.email?.message && (
          <small className="text-red-700">{errors.email.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.password?.message && (
          <small className="text-red-700">{errors.password.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mt-2"
        />
        {errors?.confirmPassword?.message && (
          <small className="text-red-700">{errors.confirmPassword.message}</small>
        )}
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        <button className="bg-[#5D2DE6] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
          {mutation.isPending ? (
            <>
              <SmallSpinner />
              <small className="text-[16px]">Creating user...</small>
            </>
          ) : (
            <small className="text-[16px]">Signup</small>
          )}
        </button>
        <Link to="/login" className="text-[14px] mt-1">
          Already have an account? <span className="text-[#5D2DE6] hover:underline">Sign in</span>
        </Link>
      </div>
    </form>
  );
};

export default SignupPage;
