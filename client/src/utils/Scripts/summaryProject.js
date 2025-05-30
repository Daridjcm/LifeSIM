import fs from 'fs';
import path from 'path';
import { readFile } from 'fs/promises';

// --- SECTION 1: Export list of diseases by system ---
const diseasesData = await readFile(
  new URL('./Diseases.json', import.meta.url),
  'utf-8',
);
const diseases = JSON.parse(diseasesData);

const summary = {};

for (const disease of diseases) {
  const system = disease.system;

  if (!summary[system]) {
    summary[system] = { diseases: 0, treatments: 0 };
  }

  summary[system].diseases += 1;
  summary[system].treatments += disease.treatments.length;
}

const sortedSystems = Object.keys(summary).sort();

let totalDiseases = 0;
let totalTreatments = 0;

let csvDiseases = 'System,Diseases,Treatments\n';

for (const system of sortedSystems) {
  const { diseases, treatments } = summary[system];
  csvDiseases += `"${system}",${diseases},${treatments}\n`;
  totalDiseases += diseases;
  totalTreatments += treatments;
}

csvDiseases += `"Total",${totalDiseases},${totalTreatments}\n`;

fs.writeFileSync(path.resolve('./CSV/diseases.csv'), csvDiseases, 'utf-8');
console.log('✅ File diseases.csv generated correctly.');

// --- SECTION 2: Export list of doctors ---
const doctorsData = await readFile(
  new URL('./Doctors.json', import.meta.url),
  'utf-8',
);
const doctors = JSON.parse(doctorsData);

console.log(`👨‍⚕️ Total Doctors: ${doctors.length}`);

let csvDoctors = 'ID,Name,Title,Specialist,Experience,Area,Price of Consult\n';

for (const doctor of doctors) {
  const { id, name, title, specialist, experience, area, price_of_consult } =
    doctor;
  csvDoctors += `${id},"${name}",${title},"${specialist}","${experience}","${area}",${price_of_consult}\n`;
}

fs.writeFileSync(path.resolve('./CSV/doctors.csv'), csvDoctors, 'utf-8');
console.log('✅ File doctors.csv generated correctly.');

// --- SECTION 3: Export list of products ---
const productsData = await readFile(
  new URL('./Products.json', import.meta.url),
  'utf-8',
);
const products = JSON.parse(productsData);

// Count the number of products
console.log(`🧴 Total Products: ${products.length}`);

// Add rows to CSV
let csvProducts = 'ID,Name,Category,Price\n';

for (const product of products) {
  const { id, name, category, price } = product;
  csvProducts += `${id},"${name}","${category}",${price}\n`;
}

fs.writeFileSync(path.resolve('./CSV/products.csv'), csvProducts, 'utf-8');
console.log('✅ File products.csv generated correctly.');

// --- SECTION 4: Export list of symptoms by system ---

// Get each unique symptom by system
const collectUniqueSymptoms = (data) => {
  const symptomsBySystem = {};

  data.forEach((item) => {
    const system = item.system;
    const symptoms = item.symptoms;

    if (!symptomsBySystem[system]) {
      symptomsBySystem[system] = new Set(); // Use the Set data structure to store unique symptoms
    }

    symptoms.forEach((symptom) => {
      symptomsBySystem[system].add(symptom); // Add the symptom to the set
    });
  });

  return symptomsBySystem;
};

// Collect all unique symptoms
const uniqueSymptoms = collectUniqueSymptoms(diseases);

// Add rows to CSV
let csvSymptoms = 'System,Symptom\n';

for (const [system, symptoms] of Object.entries(uniqueSymptoms)) {
  symptoms.forEach((symptom) => {
    csvSymptoms += `"${system}","${symptom}"\n`;
  });
}

fs.writeFileSync(
  path.resolve('./CSV/unique_symptoms.csv'),
  csvSymptoms,
  'utf-8',
);
console.log('✅ File unique_symptoms.csv generated correctly.');
