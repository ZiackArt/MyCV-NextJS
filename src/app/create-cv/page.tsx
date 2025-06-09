'use client';
import { Eye, Pencil, RotateCcw, Save } from 'lucide-react';
import PersonalDetailsForm from './../components/PersonalDetailsForm';
import { useEffect, useRef, useState } from 'react';
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from './../type';
import {
  educationsPreset,
  experiencesPreset,
  hobbiesPreset,
  languagesPreset,
  personalDetailsPreset,
  skillsPreset,
} from './../presets';
import CVpreview from './../components/CVpreview';
import ExperianceForm from './../components/ExperianceForm';
import EducationForm from './../components/EducationForm';
import LanguageForm from './../components/LanguageForm';
import SkillForm from './../components/SkillForm';
import HobbyForm from './../components/HobbyForm';
import html2canvas from 'html2canvas-pro';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';

export default function CreateCV() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset);
  // const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>('garden');
  const [zoom, setZoom] = useState<number>(187);
  const [experience, setExperiences] = useState<Experience[]>(experiencesPreset);
  const [education, setEducations] = useState<Education[]>(educationsPreset);
  const [language, setLanguages] = useState<Language[]>(languagesPreset);
  const [skills, setSkills] = useState<Skill[]>(skillsPreset);
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset);

  // ...states existants...
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [formAnimation, setFormAnimation] = useState('');

  // Gestion de l'animation lors du masquage/affichage du formulaire
  const handleToggleForm = () => {
    if (showForm) {
      setFormAnimation('animate-slide-out-left');
      setTimeout(() => {
        setShowForm(false);
        setFormAnimation('');
        setZoom(235);
      }, 400); // Durée de l'animation (ms)
    } else {
      setShowForm(true);
      setFormAnimation('animate-slide-in-right');
      setTimeout(() => setFormAnimation(''), 400);
      setZoom(187);
    }
  };

  useEffect(() => {
    const DefaultImgUrl = '/profile.png';
    fetch(DefaultImgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        // Convertit le blob en data URL pour compatibilité html2canvas
        const reader = new FileReader();
        reader.onloadend = () => {
          // On stocke la dataURL dans personalDetails.photoUrl
          setPersonalDetails((prev) => ({
            ...prev,
            photoUrl: reader.result as string,
          }));
          // On garde aussi le File si besoin ailleurs
          // setFile(new File([blob], 'profile.png', { type: blob.type }));
        };
        reader.readAsDataURL(blob);
      });
  }, []);

  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPersonalDetails((prev) => ({
        ...prev,
        photoUrl: e.target?.result as string, // dataURL ici
      }));
    };
    reader.readAsDataURL(file);
  };

  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];

  const handleResetPersonalDetails = () =>
    setPersonalDetails({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      photoUrl: '',
      postSeeking: '',
      description: '',
    });

  const handleResetExperience = () => setExperiences([]);
  const handleResetEducation = () => setEducations([]);
  const handleResetLanguage = () => setLanguages([]);
  const handleResetSkill = () => setSkills([]);
  const handleResetHobbie = () => setHobbies([]);
  // // Fonction de débogage pour vérifier l'état des données
  // function breakpoint(_error: any | undefined) {
  //   throw new Error(_error);
  // }

  // Fonction pour gérer le téléchargement du CV
  const CvPreviewRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = async () => {
    const element = CvPreviewRef.current;
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
        });
        const oldZoom = zoom;
        setZoom(200);
        await new Promise((r) => setTimeout(r, 200));
        const imgData = canvas.toDataURL('image/png');
        setZoom(oldZoom);

        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'A4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`cv.pdf`);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999,
        });
      } catch (error) {
        console.error('Erreur lors de la génération du PDF :', error);
      }
    }
  };

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          {/* // Zone de formulaire */}
          {showForm && (
            <div
              className={` w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar ${formAnimation}`}
            >
              {/* // Zone logo */}
              <div className="mb-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold italic">
                  My<span className="text-primary">CV</span>
                </a>
                <button className="btn btn-primary btn-sm" type="button" onClick={handleToggleForm}>
                  Preview
                  <Eye className="ml-2" />
                </button>
              </div>
              {/* // Zone de formulaire */}
              <div className="flex flex-col gap-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <h1 className="badge badge-primary badge-outline">Qui etes-vous ?</h1>
                  <div>
                    <button className="btn btn-primary btn-sm" onClick={handleResetPersonalDetails}>
                      <RotateCcw className=" w-4" />
                    </button>
                    <button
                      className="btn btn-secondary btn-sm ml-5"
                      onClick={handleDownloadCV}
                      disabled={!imgLoaded}
                    >
                      Download
                      <Save className=" w-4" />
                    </button>
                  </div>
                </div>

                <PersonalDetailsForm
                  personalDetails={personalDetails}
                  setPersonalDetails={setPersonalDetails}
                  onPhotoChange={handleFileChange}
                />

                {/* // Zone de formulaire pour les compétences */}

                <div className="flex justify-between items-center">
                  <h1 className="badge badge-primary badge-outline">Expériences</h1>
                  <button className="btn btn-primary btn-sm" onClick={handleResetExperience}>
                    <RotateCcw className=" w-4" />
                  </button>
                </div>

                <ExperianceForm experience={experience} setExperiences={setExperiences} />

                {/* // Zone de formulaire pour l'education */}
                <div className="flex justify-between items-center">
                  <h1 className="badge badge-primary badge-outline">Educations</h1>
                  <button className="btn btn-primary btn-sm" onClick={handleResetEducation}>
                    <RotateCcw className=" w-4" />
                  </button>
                </div>
                <EducationForm education={education} setEducations={setEducations} />

                {/* // Zone de formulaire pour l'education */}
                <div className="flex justify-between items-center">
                  <h1 className="badge badge-primary badge-outline">Langues</h1>
                  <button className="btn btn-primary btn-sm" onClick={handleResetLanguage}>
                    <RotateCcw className=" w-4" />
                  </button>
                </div>
                <LanguageForm language={language} setLanguages={setLanguages} />

                <div className="flex justify-between">
                  <div className="w-1/2 mr-3">
                    <div className="flex justify-between items-center">
                      <h1 className="badge badge-primary badge-outline">Compétences</h1>
                      <button className="btn btn-primary btn-sm" onClick={handleResetSkill}>
                        <RotateCcw className=" w-4" />
                      </button>
                    </div>
                    <SkillForm skills={skills} setSkills={setSkills} />
                  </div>
                  <div className="w-1/2 ml-3">
                    <div className="flex justify-between items-center ">
                      <h1 className="badge badge-primary badge-outline">Loisirs</h1>
                      <button className="btn btn-primary btn-sm" onClick={handleResetHobbie}>
                        <RotateCcw className=" w-4" />
                      </button>
                    </div>
                    <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* // Zone de preview */}
          <div
            className={` ${
              showForm ? 'w-2/3' : 'w-full'
            } bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview `}
          >
            {!showForm && (
              <>
                <button
                  className="btn btn-primary flex items-center justify-center fixed z-[9999] top-25  right-5"
                  type="button"
                  onClick={handleToggleForm}
                >
                  Edit
                  <Pencil className="w-5" />
                </button>
                <button
                  className="btn btn-primary flex items-center justify-center fixed z-[9999] top-38  right-5"
                  onClick={handleDownloadCV}
                  disabled={!imgLoaded}
                >
                  Save
                  <Save className=" w-4" />
                </button>
              </>
            )}
            <div className="flex items-center justify-center fixed z-[9999] top-5  right-5 ">
              <input
                type="range"
                min={50}
                max={showForm ? 200 : 250}
                value={zoom}
                className="range range-xs range-primary"
                onChange={(e) => setZoom(Number(e.target.value))}
              />
              <p className="ml-4 text-sm text-secondary">{zoom}%</p>
            </div>
            {/* // Zone de selection de theme */}
            <select
              name=""
              id=""
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[9999] w-fit top-12 right-5"
              title="Select Theme"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>

            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`,
                marginTop: showForm ? undefined : 155,
              }}
            >
              <CVpreview
                personalDetails={personalDetails}
                theme={theme}
                experience={experience}
                education={education}
                language={language}
                skills={skills}
                hobbies={hobbies}
                ref={CvPreviewRef}
                setImgLoaded={setImgLoaded}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Oups Désolé !</h1>
              <p className="py-6">
                MyCV est uniquement accessible sur les écrans plus larges. Veuillez utiliser un
                ordinateur ou une tablette pour une meilleure expérience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
