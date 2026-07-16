package com.example;
import org.junit.After;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    private int number;

    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = number;
        int b = 5;

        // Act
        int result = a + b;

        // Assert
        assertEquals(15, result);
    }
}