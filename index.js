// Write your solution in this file!
const employee = {
    name: "cayla",
    streetAddress: "18 adair",
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}; 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;  
     return employee;
};


function deleteFromEmployeeByKey(employee, key){
    deleteFromEmployeeByKey = {...employee};
    delete deleteFromEmployeeByKey[key];
    return deleteFromEmployeeByKey;

};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};
