package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CursoRepository repository;

    @GetMapping
    @ResponseBody
    public List<Curso> getAll() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseBody
    public  ResponseEntity<Void> salvarCurso(@RequestBody Curso curso) {
        repository.save(curso);
        return  ResponseEntity.ok().build();
    }

    @PutMapping
    @ResponseBody
    public ResponseEntity<Void> atualizarCurso(@RequestBody Curso curso) {
        repository.save(curso);
        return  ResponseEntity.ok().build();
    }

    @GetMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity<Curso> getCurso(@PathVariable Long id) {
        Optional<Curso> curso = repository.findById(id);
        if (curso.isPresent()) {
            return ResponseEntity.ok(curso.get());
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity<Void> deletarCurso(@PathVariable Long id) {
        Optional<Curso> curso = repository.findById(id);
        if (curso.isPresent()) {
            repository.delete(curso.get());
        }
        return  ResponseEntity.ok().build();
    }
}
