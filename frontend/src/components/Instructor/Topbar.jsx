import { Menu } from "lucide-react";

const InstructorTopbar = ({ setOpen }) => (
  <header className="flex justify-between items-center mb-10">
    <h2 className="text-3xl font-bold">Instructor Dashboard 🎓</h2>

    <button
      className="md:hidden  p-2 rounded-xl border border-white/10"
      onClick={() => setOpen(true)}
    >
      <Menu size={22} />
    </button>
  </header>
);

export default InstructorTopbar;
