import { Dumbbell, Camera, Music2, Code2, Laptop, BookOpen, Trophy, Snowflake } from 'lucide-react';

export default function About() {
  const hobbies = [
    { icon: Trophy, name: 'Basketball' },
    { icon: Dumbbell, name: 'Weightlifting' },
    { icon: Snowflake, name: 'Snowboarding' },
    { icon: Camera, name: 'Photography' },
    { icon: Music2, name: 'Music' },
    { icon: Code2, name: 'Coding' },
    { icon: Laptop, name: 'Technology' },
    { icon: BookOpen, name: 'Reading' },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
            I'm a passionate developer with over 5 years of experience in building web applications.
            My journey in tech started when I built my first website, and I've been hooked ever since.
          </p>

          <div className="mt-12 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hobbies & Interests</h3>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <hobby.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    <span className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              <dl className="mt-6 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <dt className="text-lg font-medium text-gray-900 dark:text-white">Senior Developer</dt>
                  <dd className="mt-1 text-gray-500 dark:text-gray-300">Tech Corp (2020 - Present)</dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <dt className="text-lg font-medium text-gray-900 dark:text-white">Full Stack Developer</dt>
                  <dd className="mt-1 text-gray-500 dark:text-gray-300">StartUp Inc (2018 - 2020)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}