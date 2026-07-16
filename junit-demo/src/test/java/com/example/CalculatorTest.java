package com.example;
import static org.junit.Assert.*;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {

        assertEquals(
                4,
                2 + 2
        );

    }

}