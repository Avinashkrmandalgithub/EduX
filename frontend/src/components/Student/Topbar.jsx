import { Menu } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const Topbar = ({ setOpen }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="flex justify-between items-center mb-10">
      <h2 className="text-3xl font-bold">
        Welcome Back {user?.name || "Learner"} 👋
      </h2>

      <button
        className="md:hidden p-2 rounded-xl border border-white/10"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
      </button>
    </header>
  );
};

export default Topbar;
