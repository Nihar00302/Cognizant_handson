public class TestAdapter {

    public static void main(String[] args) {

        PaymentProcessor p1 =
                new PaytmAdapter();

        PaymentProcessor p2 =
                new PhonePeAdapter();

        p1.processPayment();

        p2.processPayment();

    }

}