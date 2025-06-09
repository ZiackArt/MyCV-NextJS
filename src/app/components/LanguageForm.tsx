import React, { useState } from 'react';
import { Language } from '../type';
import { Plus } from 'lucide-react';

type Props = {
  language: Language[];
  setLanguages: (language: Language[]) => void;
};

const LanguageForm: React.FC<Props> = ({ language, setLanguages }) => {
  const [newLanguage, setNewLanguage] = useState<Language>({
    language: '',
    proficiency: '',
  });

  const handleAddLanguage = () => {
    if (!newLanguage.language || !newLanguage.proficiency) return;
    setLanguages([...language, { ...newLanguage, id: Date.now().toString() }]);
    setNewLanguage({
      language: '',
      proficiency: '',
    });
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Langue"
        value={newLanguage.language}
        onChange={(e) => setNewLanguage({ ...newLanguage, language: e.target.value })}
        className="input input-bordered w-full"
      />
      <select
        name=""
        id=""
        value={newLanguage.proficiency}
        className="select select-bordered w-full"
        onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value })}
      >
        <option value="">Selectionner la maitrise</option>
        <option value="beginner">Débutant</option>
        <option value="advance">Intermédiaire</option>
        <option value="pro">Avancé</option>
      </select>

      <button className="btn btn-primary mt-4" onClick={handleAddLanguage}>
        Add
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default LanguageForm;
