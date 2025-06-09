import React from 'react';
import { PersonalDetails } from '../type';

type Props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  onPhotoChange?: (handleFileChange: File) => void;
};

const PersonalDetailsForm: React.FC<Props> = ({
  personalDetails,
  setPersonalDetails,
  onPhotoChange,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name=""
        id=""
        value={personalDetails.fullName}
        placeholder="Nom complet"
        className="input input-bordered w-full"
        onChange={(e) => setPersonalDetails({ ...personalDetails, fullName: e.target.value })}
      />

      <div className="flex">
        <input
          type="Email"
          name=""
          id=""
          value={personalDetails.email}
          placeholder="Email"
          className="input input-bordered w-full mr-2"
          onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
        />
        <input
          type="tel"
          name=""
          id=""
          value={personalDetails.phone}
          placeholder="Téléphone"
          className="input input-bordered w-full"
          onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
        />
      </div>

      <input
        type="text"
        name=""
        id=""
        value={personalDetails.address}
        placeholder="Adresse"
        className="input input-bordered w-full"
        onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered w-full file-input-primary"
        placeholder="Photo de profil"
        name="file"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onPhotoChange && onPhotoChange(e.target.files[0]);
          }
        }}
      />
      <input
        type="text"
        name=""
        id=""
        value={personalDetails.postSeeking}
        placeholder="Poste recherché"
        className="input input-bordered w-full"
        onChange={(e) => setPersonalDetails({ ...personalDetails, postSeeking: e.target.value })}
      />
      <textarea
        className="textarea textarea-bordered w-full h-fit"
        placeholder="Description"
        value={personalDetails.description}
        onChange={(e) => setPersonalDetails({ ...personalDetails, description: e.target.value })}
      ></textarea>
    </div>
  );
};

export default PersonalDetailsForm;
