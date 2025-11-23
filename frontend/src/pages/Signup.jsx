import ThemeToggle from "../components/ThemeToggle";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 max-w-4xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎓</span>
            <h1 className="text-2xl font-semibold dark:text-white">EduX</h1>
          </div>

          <h2 className="text-3xl font-bold dark:text-white">
            Start your journey
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Join thousands of learners and instructors building their future
          </p>

          <div className="mt-8">
            <img
              src="https://i.pinimg.com/736x/aa/d4/4d/aad44dc7a594486fdf7df24742cc6986.jpg"
              className="rounded-xl shadow-md"
              alt="illustration"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Create an account
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />

            <div className="flex gap-4 dark:text-gray-300">
              <label className="flex items-center gap-2">
                <input type="radio" name="role" defaultChecked /> Student
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="role" /> Instructor
              </label>
            </div>

            <button className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
              Create Account
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1 dark:border-gray-600" />
            <span className="text-gray-500 text-sm dark:text-gray-400">
              OR CONTINUE WITH
            </span>
            <hr className="flex-1 dark:border-gray-600" />
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 border p-3 rounded-lg dark:border-gray-600 dark:text-white">
              <img src="/google.svg" className="w-5" /> Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border p-3 rounded-lg dark:border-gray-600 dark:text-white">
              <img src="/github.svg" className="w-5 invert dark:invert-0" /> GitHub
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-center">
            Already have an account?
            <span className="text-indigo-500 cursor-pointer ml-1">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
