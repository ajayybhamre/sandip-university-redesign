const laboratories = [
  "Aerospace and Aeronautical Engineering Laboratory",
  "Civil Engineering Materials and Structural Laboratory",
  "Environmental Engineering Laboratory",
  "Electrical Machines and Power Systems Laboratory",
  "Electronics and Telecommunication Laboratory",
  "Mechanical Engineering Workshop and Manufacturing Laboratory",
  "Computer-Aided Design and Simulation Laboratory",
  "Biotechnology and Applied Sciences Laboratory",
];

const Labs = () => (
  <section className="py-6">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Laboratories</h3>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      Students learn through practical work in laboratories supporting engineering design, testing, simulation, manufacturing, and applied research.
    </p>
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {laboratories.map((laboratory) => (
        <li key={laboratory} className="rounded-lg border border-red-100 bg-red-50/50 px-4 py-3 text-gray-700 dark:border-red-900 dark:bg-red-950/20 dark:text-gray-300">
          {laboratory}
        </li>
      ))}
    </ul>
  </section>
);

export default Labs;