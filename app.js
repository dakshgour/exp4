const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Update Employee");
  console.log("4. Delete Employee");
  console.log("5. Exit");

  rl.question("Select an option: ", handleInput);
}

function handleInput(option) {
  switch (option) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      updateEmployee();
      break;
    case "4":
      deleteEmployee();
      break;
    case "5":
      rl.close();
      break;
    default:
      showMenu();
  }
}

function addEmployee() {
  rl.question("Employee Name: ", (name) => {
    rl.question("Position: ", (position) => {
      rl.question("Salary: ", (salary) => {
        const emp = {
          id: Date.now(),
          name,
          position,
          salary: Number(salary)
        };
        employees.push(emp);
        console.log("Employee added successfully!");
        showMenu();
      });
    });
  });
}

function listEmployees() {
  console.log("\nEmployee List:");
  employees.forEach(emp => {
    console.log(
      `ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`
    );
  });
  console.log("Total employees:", employees.length);
  showMenu();
}

function updateEmployee() {
  rl.question("Enter ID to update: ", (id) => {
    const emp = employees.find(e => e.id == id);
    if (!emp) {
      console.log("Employee not found");
      return showMenu();
    }

    rl.question("New Name: ", (name) => {
      emp.name = name || emp.name;
      console.log("Updated!");
      showMenu();
    });
  });
}

function deleteEmployee() {
  rl.question("Enter ID to delete: ", (id) => {
    employees = employees.filter(e => e.id != id);
    console.log("Deleted!");
    showMenu();
  });
}

showMenu();