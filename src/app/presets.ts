import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from './type';

export const personalDetailsPreset: PersonalDetails = {
  fullName: 'Ziack Art',
  email: 'ziackart@gmail.com',
  phone: '+123456789',
  address: '123, Avenue Example, CA, ON',
  photoUrl: '/profile.png',
  postSeeking: 'Développeur Full-Stack',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
};

export const experiencesPreset: Experience[] = [
  {
    id: 'uuid-1',
    jobTitle: 'Développeur Web',
    companyName: 'Tech Solutions',
    startDate: '2022-01-01',
    endDate: '2023-01-01',
    description: "Développement d'applications web en utilisant React et Node.js.",
  },
  {
    id: 'uuid-2',
    jobTitle: 'Chef de projet',
    companyName: 'Innovatech',
    startDate: '2020-06-01',
    endDate: '2022-01-01',
    description: 'Gestion de projets techniques, coordination des équipes de développement.',
  },
  {
    id: 'uuid-3',
    jobTitle: 'Développeur Web',
    companyName: 'Tech Solutions',
    startDate: '2022-01-01',
    endDate: '2023-01-01',
    description: "Développement d'applications web en utilisant React et Node.js.",
  },
];

export const educationsPreset: Education[] = [
  {
    id: 'uuid-3',
    degree: 'Master en Informatique',
    school: 'Edu',
    startDate: '2015-09-01',
    endDate: '2018-06-01',
    description: 'Spécialisation en développement web et bases de données.',
  },
  {
    id: 'uuid-4',
    degree: 'Master en Informatique',
    school: 'Edu',
    startDate: '2015-09-01',
    endDate: '2018-06-01',
    description: 'Spécialisation en développement web et bases de données.',
  },
  {
    id: 'uuid-5',
    degree: 'Master en Informatique',
    school: 'Edu',
    startDate: '2015-09-01',
    endDate: '2018-06-01',
    description: 'Spécialisation en développement web et bases de données.',
  },
  {
    id: 'uuid-6',
    degree: 'Master en Informatique',
    school: 'Edu',
    startDate: '2015-09-01',
    endDate: '2018-06-01',
    description: 'Spécialisation en développement web et bases de données.',
  },
];

export const skillsPreset: Skill[] = [
  { id: 'uuid-4', name: 'React.js' },
  { id: 'uuid-5', name: 'Node.js' },
];

export const languagesPreset: Language[] = [
  { id: 'uuid-6', language: 'Anglais', proficiency: 'advance' },
  { id: 'uuid-7', language: 'Français', proficiency: 'pro' },
];

export const hobbiesPreset: Hobby[] = [
  { id: 'uuid-8', name: 'Voyager' },
  { id: 'uuid-9', name: 'Lire des livres' },
];
