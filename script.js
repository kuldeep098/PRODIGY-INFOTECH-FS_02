let employees = JSON.parse(localStorage.getItem("employees")) || [];

const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTable");

// Add Employee
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const salary = document.getElementById("salary").value;

  const employee = { id: Date.now(), name, role, salary };
  employees.push(employee);

  localStorage.setItem("employees", JSON.stringify(employees));

  form.reset();
  renderEmployees();
});

// Render Employees
function renderEmployees() {
  tableBody.innerHTML = "";
  
  employees.forEach((emp, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.role}</td>
      <td>₹${emp.salary}</td>
      <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Delete Employee
function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
}

// Init
renderEmployees();
