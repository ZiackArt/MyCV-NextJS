import React, { useState } from 'react';
import { Hobby } from '../type';
import { Plus } from 'lucide-react';

type Props = {
  hobbies: Hobby[];
  setHobbies: (hobbies: Hobby[]) => void;
};

const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {
  const [newHobby, setNewHobby] = useState<Hobby>({
    name: '',
  });

  const handleAddHobby = () => {
    if (!newHobby.name) return;
    setHobbies([...hobbies, { ...newHobby, id: Date.now().toString() }]);
    setNewHobby({
      name: '',
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Hobbies"
        value={newHobby.name}
        onChange={(e) => setNewHobby({ ...newHobby, name: e.target.value })}
        className="input input-bordered w-full mt-4"
      />
      <button className="btn btn-primary mt-4 w-full" onClick={handleAddHobby}>
        Add
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default HobbyForm;
