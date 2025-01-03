export default function ExperienceRole({ title, company, period }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors duration-200">
      <dt className="text-lg font-medium text-gray-900 dark:text-white">{title}</dt>
      <dd className="mt-1 text-gray-500 dark:text-gray-300">{company} ({period})</dd>
    </div>
  );
}
