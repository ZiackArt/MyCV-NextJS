import React, { useState } from 'react';
import { Education } from '../type';
import { Plus } from 'lucide-react';

type Props = {
  education: Education[];
  setEducations: (education: Education[]) => void;
};

const EducationForm: React.FC<Props> = ({ education, setEducations }) => {
  const [newEducation, setNewEducation] = useState<Education>({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAddEducation = () => {
    if (!newEducation.school || !newEducation.degree) return;
    setEducations([...education, { ...newEducation, id: Date.now().toString() }]);
    setNewEducation({
      school: '',
      degree: '',
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
            placeholder="Diplôme"
            value={newEducation.degree}
            className="input input-bordered w-full"
            onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
          />

          <input
            type="text"
            placeholder="Nom de l'école"
            value={newEducation.school}
            className="input input-bordered w-full ml-4"
            onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Date de Début"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = 'text';
              }
            }}
            value={newEducation.startDate}
            className="input input-bordered w-full"
            onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
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
            value={newEducation.endDate}
            className="input input-bordered w-full ml-4"
            onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          value={newEducation.description}
          onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
        ></textarea>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleAddEducation}>
        Add
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default EducationForm;
