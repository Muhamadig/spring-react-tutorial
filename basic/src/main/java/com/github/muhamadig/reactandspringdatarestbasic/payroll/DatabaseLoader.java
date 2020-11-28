package com.github.muhamadig.reactandspringdatarestbasic.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
        this.employeeRepository.save(new Employee("Muhamad", "Igbria", "Software Engineer"));
    }
}
