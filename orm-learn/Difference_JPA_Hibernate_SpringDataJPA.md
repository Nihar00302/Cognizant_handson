# Difference Between JPA, Hibernate and Spring Data JPA

## Introduction

JPA (Java Persistence API), Hibernate, and Spring Data JPA are technologies used for database operations in Java applications. Although they are related, they serve different purposes.

---

## 1. JPA (Java Persistence API)

- JPA stands for **Java Persistence API**.
- It is a **specification (standard)** for Object Relational Mapping (ORM).
- JPA defines rules for mapping Java objects to database tables.
- It does not provide an implementation by itself.
- It requires an implementation such as Hibernate.

### Advantages
- Database independent.
- Standard API for persistence.
- Supports annotations like `@Entity`, `@Table`, and `@Id`.

---

## 2. Hibernate

- Hibernate is an **ORM (Object Relational Mapping) framework**.
- It is the most popular implementation of JPA.
- Hibernate converts Java objects into database records and vice versa.
- It automatically generates SQL queries.
- It provides additional features beyond JPA, such as caching and performance optimization.

### Advantages
- Reduces SQL coding.
- Automatic table mapping.
- Supports caching.
- Faster database development.

---

## 3. Spring Data JPA

- Spring Data JPA is a **Spring Framework module** built on top of JPA.
- It simplifies database access by reducing boilerplate code.
- It automatically provides CRUD operations through repository interfaces.
- Developers only need to create repository interfaces by extending `JpaRepository`.

### Advantages
- Very little code is required.
- Automatic CRUD methods.
- Easy integration with Spring Boot.
- Supports custom query methods.

---

# Difference Between JPA, Hibernate and Spring Data JPA

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Full Form | Java Persistence API | Hibernate ORM | Spring Data JPA |
| Type | Specification | ORM Framework | Spring Module |
| Developed By | Oracle/Java | Hibernate Team | Spring |
| Purpose | Defines persistence standards | Implements JPA | Simplifies JPA usage |
| SQL Writing | Minimal | Minimal | Almost none |
| CRUD Support | Manual implementation | Implementation provided | Automatic CRUD methods |
| Dependency | Needs an implementation | Can work independently or as JPA implementation | Depends on JPA and Hibernate |

---

# Relationship

```
Spring Data JPA
        ↓
       JPA
        ↓
   Hibernate
        ↓
    MySQL Database
```

---

# Example

### JPA Entity

```java
@Entity
public class Country {

    @Id
    private String code;

    private String name;
}
```

### Hibernate

Hibernate automatically generates SQL such as:

```sql
SELECT * FROM country;
```

### Spring Data JPA Repository

```java
public interface CountryRepository extends JpaRepository<Country, String> {

}
```

Now data can be retrieved simply by writing:

```java
countryRepository.findAll();
```

without implementing the method.

---

# Conclusion

- **JPA** is a specification that defines persistence standards.
- **Hibernate** is an ORM framework that implements JPA.
- **Spring Data JPA** is a Spring module that simplifies database operations by providing ready-made repository methods.

In most Spring Boot applications, developers use **Spring Data JPA**, which internally uses **Hibernate** as the JPA implementation to communicate with the database.