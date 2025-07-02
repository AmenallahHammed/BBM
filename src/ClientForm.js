import React, { useState } from 'react';
import './ClientForm.css';
import NavBar from './NavBar';

const clientTypes = [
  { value: '', label: 'Sélectionner le type' },
  { value: 'particulier', label: 'Particulier' },
  { value: 'entreprise', label: 'Entreprise' },
  { value: 'organisation', label: 'Organisation' },
];

const clientNatures = [
  { value: '', label: 'Sélectionner la nature' },
  { value: 'local', label: 'Local' },
  { value: 'etranger', label: 'Étranger' },
];

const countries = [
  { value: '', label: 'Sélectionner le pays' },
  { value: 'maroc', label: 'Maroc' },
  { value: 'france', label: 'France' },
  { value: 'espagne', label: 'Espagne' },
  { value: 'autre', label: 'Autre' },
];

const currencies = [
  { value: '', label: 'Sélectionner la devise' },
  { value: 'mad', label: 'MAD' },
  { value: 'eur', label: 'EUR' },
  { value: 'usd', label: 'USD' },
];

const initialState = {
  rc_cin: '',
  type_client: '',
  nature_client: '',
  adresse1: '',
  adresse2: '',
  adresse3: '',
  pays: '',
  contact1: '',
  tell1: '',
  fax1: '',
  contact2: '',
  tell2: '',
  fax2: '',
  email: '',
  nom_client: '',
  matricule_fiscale: '',
  devise: '',
  pst1: '',
  pst2: '',
  remarque: '',
};

function ClientForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.rc_cin) newErrors.rc_cin = 'Ce champ est requis';
    if (!form.type_client) newErrors.type_client = 'Ce champ est requis';
    if (!form.nature_client) newErrors.nature_client = 'Ce champ est requis';
    if (!form.nom_client) newErrors.nom_client = 'Ce champ est requis';
    if (!form.email) newErrors.email = 'Ce champ est requis';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Email invalide';
    if (!form.pays) newErrors.pays = 'Ce champ est requis';
    if (!form.devise) newErrors.devise = 'Ce champ est requis';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      alert('Client enregistré avec succès!');
      setForm(initialState);
    }
  };

  return (
    <>
      <NavBar />
      <form className="client-form" onSubmit={handleSubmit} noValidate>
        <div className="client-form-title">Fiche de Client</div>
        <div className="client-form-content">
          <div className="client-form-col right">
            <div className="form-row">
              <label htmlFor="rc_cin">RC/CIN *</label>
              <input type="text" id="rc_cin" name="rc_cin" value={form.rc_cin} onChange={handleChange} required />
              {errors.rc_cin && <span className="error">{errors.rc_cin}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="type_client">Type de client *</label>
              <select id="type_client" name="type_client" value={form.type_client} onChange={handleChange} required>
                {clientTypes.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
              {errors.type_client && <span className="error">{errors.type_client}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="nature_client">Nature de client *</label>
              <select id="nature_client" name="nature_client" value={form.nature_client} onChange={handleChange} required>
                {clientNatures.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
              {errors.nature_client && <span className="error">{errors.nature_client}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="adresse1">Adresse 1</label>
              <input type="text" id="adresse1" name="adresse1" value={form.adresse1} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="adresse2">Adresse 2</label>
              <input type="text" id="adresse2" name="adresse2" value={form.adresse2} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="adresse3">Adresse 3</label>
              <input type="text" id="adresse3" name="adresse3" value={form.adresse3} onChange={handleChange} />
            </div>
          <div className="form-row">
            <label htmlFor="pays">Pays *</label>
            <select id="pays" name="pays" value={form.pays} onChange={handleChange} required>
              {countries.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
            {errors.pays && <span className="error">{errors.pays}</span>}
          </div>
          <div className="form-row">
            <label htmlFor="remarque">Remarque</label>
            <textarea id="remarque" name="remarque" value={form.remarque} onChange={handleChange} rows={3} />
          </div>
          </div>
          <div className="client-form-col left">
            <div className="form-row">
              <label htmlFor="nom_client">Nom client *</label>
              <input type="text" id="nom_client" name="nom_client" value={form.nom_client} onChange={handleChange} required />
              {errors.nom_client && <span className="error">{errors.nom_client}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="matricule_fiscale">Matricule fiscale</label>
              <input type="text" id="matricule_fiscale" name="matricule_fiscale" value={form.matricule_fiscale} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="contact1">Contact 1</label>
              <input type="text" id="contact1" name="contact1" value={form.contact1} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="tell1">Tél 1</label>
              <input type="text" id="tell1" name="tell1" value={form.tell1} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="fax1">Fax 1</label>
              <input type="text" id="fax1" name="fax1" value={form.fax1} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="contact2">Contact 2</label>
              <input type="text" id="contact2" name="contact2" value={form.contact2} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="tell2">Tél 2</label>
              <input type="text" id="tell2" name="tell2" value={form.tell2} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="fax2">Fax 2</label>
              <input type="text" id="fax2" name="fax2" value={form.fax2} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="devise">Devise *</label>
              <select id="devise" name="devise" value={form.devise} onChange={handleChange} required>
                {currencies.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
              {errors.devise && <span className="error">{errors.devise}</span>}
            </div>
            <div className="form-row">
              <label htmlFor="pst1">PST 1</label>
              <input type="text" id="pst1" name="pst1" value={form.pst1} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="pst2">PST 2</label>
              <input type="text" id="pst2" name="pst2" value={form.pst2} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </>
  );
}

export default ClientForm;
