export default function InterestCard({ Icon, name }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/50">
      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
        {name}
      </span>
    </div>
  );
}
