import React, { useState } from 'react';
import { Skill } from '../type';
import { Plus } from 'lucide-react';

type Props = {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
};

const SkillForm: React.FC<Props> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState<Skill>({
    name: '',
  });

  const handleAddSkill = () => {
    if (!newSkill.name) return;
    setSkills([...skills, { ...newSkill, id: Date.now().toString() }]);
    setNewSkill({
      name: '',
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Skill"
        value={newSkill.name}
        onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        className="input input-bordered w-full mt-4"
      />
      <button className="btn btn-primary mt-4 w-full" onClick={handleAddSkill}>
        Add
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default SkillForm;
