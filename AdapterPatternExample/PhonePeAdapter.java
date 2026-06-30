public class PhonePeAdapter implements PaymentProcessor {

    PhonePeGateway phonepe =
            new PhonePeGateway();

    public void processPayment() {
        phonepe.makePayment();
    }

}