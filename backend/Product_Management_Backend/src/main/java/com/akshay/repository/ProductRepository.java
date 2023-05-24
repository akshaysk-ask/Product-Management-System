package com.akshay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akshay.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
