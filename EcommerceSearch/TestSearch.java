import java.util.Arrays;
import java.util.Comparator;

public class TestSearch {

    public static void main(
            String[] args) {

        Product[] products = {

                new Product(
                        1,
                        "Laptop",
                        "Electronics"),

                new Product(
                        2,
                        "Phone",
                        "Electronics"),

                new Product(
                        3,
                        "Shoes",
                        "Fashion")
        };

        Product result1 =
                LinearSearch
                        .search(
                                products,
                                "Phone");

        System.out.println(
                "Linear: "
                +
                result1.productName);

        Arrays.sort(
                products,

                Comparator.comparing(
                        p ->
                                p.productName
                ));

        Product result2 =
                BinarySearch
                        .search(
                                products,
                                "Phone");

        System.out.println(
                "Binary: "
                +
                result2.productName);

    }

}