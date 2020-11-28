package com.github.muhamadig.reactandspringdatarestbasic.payroll;

import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee,Long> {

}
