package com.cognizant.spring_learn.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        List<Country> countries = Arrays.asList(

                createCountry("IN", "India"),
                createCountry("US", "United States"),
                createCountry("DE", "Germany"),
                createCountry("JP", "Japan")

        );

        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

    private Country createCountry(String code, String name) {

        Country country = new Country();
        country.setCode(code);
        country.setName(name);

        return country;
    }
}