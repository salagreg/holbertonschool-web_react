// Définition de l'interface Student
interface Student {firstName: string; lastName: string; age: number; location: string}

// Création de deux étudiants
const student1: Student = {firstName: 'string', lastName: 'string', age: 44, location: 'string'};
const student2: Student = {firstName: 'string', lastName: 'string', age: 44, location: 'string'};

// Stockage dans un tableau typé
const studentsList: Student[] = [student1, student2];

// Création d'un élément table HTML
const table: HTMLTableElement = document.createElement('table');

// Boucle sur la liste des étudiants
studentsList.forEach((student: Student) => {

  // Création d’une ligne
  const row: HTMLTableRowElement = document.createElement('tr');

  // Création des cellules
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  // Insertion du texte dans les cellules
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Ajout des cellules à la ligne
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Ajout de la ligne au tableau
  table.appendChild(row);
});

// Ajout du tableau au document
document.body.appendChild(table);
