import { Dumbbell, Camera, Music2, Code2, Laptop, BookOpen, Trophy, Snowflake, ExternalLink } from 'lucide-react';
import InterestCard from '../components/InterestCard';
import SkillTag from '../components/SkillTag';
import ExperienceRole from '../components/ExperienceRole';

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

  const skills = ['React', 'JavaScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2018 - 2020'
    }
  ];

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto bg-gray-50 dark:bg-gray-900 pt-8">
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
                  <InterestCard key={hobby.name} Icon={hobby.icon} name={hobby.name} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  <span className="text-sm mr-1">View Resume</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <dl className="mt-6 space-y-4">
                {experiences.map((experience) => (
                  <ExperienceRole
                    key={experience.title}
                    title={experience.title}
                    company={experience.company}
                    period={experience.period}
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}