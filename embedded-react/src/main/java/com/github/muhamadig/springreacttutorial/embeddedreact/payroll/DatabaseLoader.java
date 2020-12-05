
package com.github.muhamadig.springreacttutorial.embeddedreact.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }




    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Employee("Muhamad", "Igbaria", "Infrastructure Full Stack Engineer"));
        this.repository.save(new Employee("Eyal", "Itzaki", "Automation TL"));
        this.repository.save(new Employee("Leanne ", "Graham", "Multi-layered client-server neural-net"));
        this.repository.save(new Employee("Ervin ", "Howell", "Face to face bifurcated interface"));
        this.repository.save(new Employee("Patricia ", "Dietrich", "User-centric fault-tolerant solution"));
        this.repository.save(new Employee("Dennis  ", "Weissnat", "Configurable multimedia task-force"));
        this.repository.save(new Employee("Nicholas   ", "Reichert", "Centralized empowering task-force"));
    }
}
