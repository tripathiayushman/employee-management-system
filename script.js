document.getElementById('employeeForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    let name = document.getElementById('employeeName').value;  
    let department = document.getElementById('employeeDepartment').value;  
    let address = document.getElementById('employeeAddress').value;  
    let salary = document.getElementById('employeeSalary').value;  
    let email = document.getElementById('employeeEmail').value;  
    let contact = document.getElementById('employeeContact').value;  
    if (name && department) {  
        addEmployee(name, department, address, salary, email, contact); // Call function to add employee  
        document.getElementById('employeeName').value = ''; // Clear input fields after submission  
        document.getElementById('employeeDepartment').value = '';  
        document.getElementById('employeeAddress').value = '';  
        document.getElementById('employeeSalary').value = '';  
        document.getElementById('employeeEmail').value = '';  
        document.getElementById('employeeContact').value = '';  
    } else {  
        alert('Please fill in all required fields.');  
    }  
});  
function addEmployee(name, department, address, salary, email, contact) {  
    let employeeList = document.getElementById('employeeList');  
    let employeeDiv = document.createElement('div');  
    employeeDiv.classList.add('employee');  
    employeeDiv.innerHTML = `  
        <h3>Name: ${name}</h3>  
        <p>Department: ${department}</p>  
        <p>Address: ${address}</p>  
        <p>Salary: ${salary}</p>  
        <p>Email: ${email}</p>  
        <p>Contact Number: ${contact}</p>  
        <button class="deleteBtn">Delete</button> <!-- Delete button for each employee -->  
        <button class="renameBtn">Rename</button> <!-- Rename button for each employee -->  
    `;  
    employeeList.appendChild(employeeDiv);  
    // Add an event listener for the delete button  
    employeeDiv.querySelector('.deleteBtn').addEventListener('click', function() {  
        employeeList.removeChild(employeeDiv); // Remove the employee entry from the list  
    });  
    // Add an event listener for rename button  
    employeeDiv.querySelector('.renameBtn').addEventListener('click', function() {  
        let newName = prompt('Enter new name:');  
        if (newName !== null && newName !== '') {  
            employeeDiv.querySelector('h3').textContent = `Name: ${newName}`;  
        }  
    });  
}  
