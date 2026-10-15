// console.log("Hello from JS")

// Creating an object
const $employee = {
  name: "Jax",
  id: 891230,
  hireDate: 23,
  hireMonth: "Aug",
  hireYear: 2001,
  department: "Innovation",
  email: "jax@company.com",

  skills: ["UX", "Prototyping", "Research", "Documentation"],

  address: {
    street: "123 Street",
    city: "Merlot"
  },

  selfIntro: function() {
    const $introTemplate =
      `Hi, I am ${this.name}. I started working in ${this.department} in ${this.hireYear}. I am skilled in ${this.skills.join(", ")}.`;

    return $introTemplate;
  }
};


// Find employee section
const $empSection = document.getElementById("employee");


// Change department
$employee.department = "Innovation and Research";


// Welcome heading
$empSection.insertAdjacentHTML(
  "afterbegin",
  `<h2>Welcome ${$employee.name}</h2>`
);


// Employee information
const $empInfo = `
  <dl>
    <dt>ID</dt>
    <dd>${$employee.id}</dd>

    <dt>Department</dt>
    <dd>${$employee.department}</dd>

    <dt>Hired On</dt>
    <dd>${$employee.hireMonth} ${$employee.hireDate}, ${$employee.hireYear}</dd>

    <dt>Email</dt>
    <dd>${$employee.email}</dd>
  </dl>
`;

$empSection.insertAdjacentHTML(
  "beforeend",
  $empInfo
);


// Access array in object
const $empSkills = $employee.skills;

$empSection.insertAdjacentHTML(
  "beforeend",
  `<p>${$employee.name} is skilled in ${$empSkills.join(", ")}</p>`
);


// Access object in object
const $empAddress =
  `${$employee.address.street}, ${$employee.address.city}`;

$empSection.insertAdjacentHTML(
  "beforeend",
  `<p>Employee's Address: ${$empAddress}</p>`
);


// Use object method
$empSection.insertAdjacentHTML(
  "beforeend",
  `<p>${$employee.selfIntro()}</p>`
);


// Explore object in console
console.log(Object.keys($employee));
console.log(Object.values($employee));
console.log(Object.entries($employee));