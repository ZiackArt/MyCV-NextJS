import React, { useState } from 'react';
import { Experience } from '../type';
import { Plus } from 'lucide-react';

type Props = {
  experience: Experience[];
  setExperiences: (experience: Experience[]) => void;
};

const ExperianceForm: React.FC<Props> = ({ experience, setExperiences }) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAddExperience = () => {
    setExperiences([...experience, { ...newExperience, id: crypto.randomUUID() }]);
    setNewExperience({
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Titre du poste"
            value={newExperience.jobTitle}
            className="input input-bordered w-full"
            onChange={(e) => setNewExperience({ ...newExperience, jobTitle: e.target.value })}
          />

          <input
            type="text"
            placeholder="Nom de l'entreprise"
            value={newExperience.companyName}
            className="input input-bordered w-full ml-4"
            onChange={(e) => setNewExperience({ ...newExperience, companyName: e.target.value })}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Date de Debut"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = 'text';
              }
            }}
            value={newExperience.startDate}
            className="input input-bordered w-full"
            onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
          />

          <input
            type="text"
            placeholder="Date de Fin"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = 'text';
              }
            }}
            value={newExperience.endDate}
            className="input input-bordered w-full ml-4"
            onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          value={newExperience.description}
          onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
        ></textarea>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleAddExperience}>
        Add
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default ExperianceForm;
