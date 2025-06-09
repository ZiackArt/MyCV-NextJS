'use client';
import React, { useState, forwardRef, use } from 'react';
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '../type';
import {
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPinCheckInside,
  Phone,
  Star,
} from 'lucide-react';

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
  theme?: string;
  experience: Experience[];
  education: Education[]; // Assuming education is not used in this component
  language: Language[];
  skills: Skill[];
  hobbies: Hobby[];
  download?: boolean;
  ref: React.Ref<HTMLDivElement>;
  setImgLoaded?: any;
};

const getStarRating = (proficiency: string) => {
  const maxStars = 5;
  let filledStars = 0;

  switch (proficiency) {
    case 'beginner':
      filledStars = 1;
      break;
    case 'advance':
      filledStars = 3;
      break;
    case 'pro':
      filledStars = 5;
      break;
    default:
      filledStars = 0;
  }
  return (
    <>
      {Array.from({ length: filledStars }, (_, index) => (
        <Star key={index} className={`text-primary mr-1.5`} />
      ))}
      {Array.from({ length: maxStars - filledStars }, (_, index) => (
        <Star key={index + filledStars} className="text-gray-300 mr-1.5" />
      ))}
    </>
  );
};

const CVpreview = forwardRef<HTMLDivElement, Props>(
  (
    {
      personalDetails,
      file,
      theme,
      experience,
      education,
      language,
      skills,
      hobbies,
      download,
      setImgLoaded,
    },
    ref
  ) => {
    return (
      <div ref={ref} className={'flex p-16 w-[950px] h-[1200px]'} data-theme={theme}>
        <div className="flex flex-col w-1/3">
          <div className="h-80 rounded-full border-8 overflow-hidden border-primary">
            {personalDetails.photoUrl && (
              <img
                src={personalDetails.photoUrl}
                alt="Profile"
                width={100}
                height={100}
                className="w-full h-full rounded-lg object-cover"
                onLoad={() => setImgLoaded(true)}
                // onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
              />
            )}
          </div>
          <div className="mt-4 flex-col w-full">
            <div>
              <h1 className="uppercase font-bold my-2">CONTACT</h1>
              <ul className="space-y-2">
                <li className="flex">
                  <div className="break-all text-sm relative">
                    <div className="ml-8">{personalDetails.email}</div>
                    {personalDetails.email && (
                      <span className="absolute left-0 top-0 text-primary">
                        <Mail className="w-5 text-primary" />
                      </span>
                    )}
                  </div>
                </li>
                <li className="flex">
                  <div className="break-all text-sm relative">
                    <div className="ml-8">{personalDetails.phone}</div>
                    {personalDetails.phone && (
                      <span className="absolute left-0 top-0 text-primary">
                        <Phone className="w-5 text-primary" />
                      </span>
                    )}
                  </div>
                </li>
                <li className="flex">
                  <div className="break-all text-sm relative">
                    <div className="ml-8">{personalDetails.address}</div>
                    {personalDetails.address && (
                      <span className="absolute left-0 top-0 text-primary">
                        <MapPinCheckInside className="w-5 text-primary" />
                      </span>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h1 className="uppercase font-bold my-2">Compétences</h1>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <span className="badge badge-outline badge-primary uppercase mr-1">
                      {skill.name}{' '}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h1 className="uppercase font-bold my-2">Langues</h1>
              <div className="flex flex-col space-y-2">
                {language.map((lang) => (
                  <div key={lang.id}>
                    <span className="capitalize font-semibold text-secondary">
                      {lang.language}{' '}
                    </span>
                    <div className="flex mt-2">{getStarRating(lang.proficiency)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h1 className="uppercase font-bold my-2">Hobbies</h1>
              <div className="flex flex-col space-y-2">
                {hobbies.map((hobbie) => (
                  <div key={hobbie.id}>
                    <span className="capitalize text-secondary">{hobbie.name} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 ml-8">
          <div className="w-full flex flex-col space-y-4">
            <h1 className="uppercase text-xl">{personalDetails.fullName} </h1>
            <h2 className="uppercase text-5xl text-primary font-bold">
              {personalDetails.postSeeking}
            </h2>
            <p className="break-all w-full text-sm text-justify">{personalDetails.description}</p>
          </div>

          <section className="w-full h-fit mt-10">
            <div>
              <h1 className="uppercase font-bold mb-2 text-secondary ">Experiences</h1>
              <ul className="steps steps-vertical space-y-3">
                {experience?.map((exp) => (
                  <li key={exp.id} className="step step-primary ">
                    <div className="text-left w-full">
                      <h2 className="flex text-md font-bold items-center uppercase text-primary">
                        <BriefcaseBusiness className="w-5" />
                        <span className="ml-2">{exp.jobTitle}</span>
                      </h2>
                      <div className="text-xs my-2 flex justify-between items-center w-full">
                        <p className="text-sm">{exp.companyName}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(exp.startDate).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}{' '}
                          -{' '}
                          {exp.endDate
                            ? new Date(exp.endDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })
                            : 'Present'}
                        </p>
                      </div>
                      <p className="text-sm break-all ">{exp.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 w-full">
              <h1 className="uppercase font-bold mb-2 text-secondary ">Education</h1>
              <ul className="steps steps-vertical space-y-3 w-full">
                {education?.map((edu) => (
                  <li key={edu.id} className="step step-primary w-full">
                    <div className="text-left w-full">
                      <h2 className="flex text-md font-bold items-center uppercase text-primary">
                        <GraduationCap className="w-5" />
                        <span className="ml-2">{edu.degree}</span>
                      </h2>
                      <div className="text-xs my-2 flex justify-between items-center w-full">
                        <p className="text-sm">{edu.school}</p>
                        <p className="text-xs text-gray-500">
                          {edu.startDate
                            ? new Date(edu.startDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })
                            : ''}{' '}
                          -{' '}
                          {edu.endDate
                            ? new Date(edu.endDate).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })
                            : 'Présent'}
                        </p>
                      </div>
                      <p className="text-sm break-all ">{edu.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
);

export default CVpreview;
