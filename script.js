document.addEventListener("DOMContentLoaded", () => {
    const employeeTable = document.getElementById("employee-table");
    const addEmployeeForm = document.getElementById("add-employee-form");
    const toggleMode = document.getElementById("toggle-mode");
    const totalEmployees = document.getElementById("total-employees");
    const departments = document.getElementById("departments");
    const searchInput = document.getElementById("search");
  
    let employees = [];
  
    const updateStats = () => {
      totalEmployees.textContent = employees.length;
      const uniqueDepartments = new Set(employees.map(emp => emp.department));
      departments.textContent = uniqueDepartments.size;
    };
  
    const renderTable = () => {
      employeeTable.innerHTML = "";
      employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.role}</td>
          <td>${emp.department}</td>
          <td>
            <button data-index="${index}" class="edit">Edit</button>
            <button data-index="${index}" class="delete">Delete</button>
          </td>
        `;
        employeeTable.appendChild(row);
      });
    };
  
    addEmployeeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addEmployeeForm);
      const newEmployee = {
        name: formData.get("name"),
        email: formData.get("email"),
        role: formData.get("role"),
        department: formData.get("department"),
        phone: formData.get("phone"),
      };
      employees.push(newEmployee);
      updateStats();
      renderTable();
      addEmployeeForm.reset();
    });
  
    employeeTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        const index = e.target.dataset.index;
        employees.splice(index, 1);
        updateStats();
        renderTable();
      }
  
      if (e.target.classList.contains("edit")) {
        const index = e.target.dataset.index;
        const employee = employees[index];
        document.getElementById("name").value = employee.name;
        document.getElementById("email").value = employee.email;
        document.getElementById("role").value = employee.role;
        document.getElementById("department").value = employee.department;
        document.getElementById("phone").value = employee.phone;
        employees.splice(index, 1);
        updateStats();
        renderTable();
      }
    });
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query) ||
        emp.role.toLowerCase().includes(query) ||
        emp.department.toLowerCase().includes(query)
      );
  
      employeeTable.innerHTML = "";
      filteredEmployees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.role}</td>
          <td>${emp.department}</td>
          <td>
            <button data-index="${index}" class="edit">Edit</button>
            <button data-index="${index}" class="delete">Delete</button>
          </td>
        `;
        employeeTable.appendChild(row);
      });
    });
  
    toggleMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    updateStats();
  });
  