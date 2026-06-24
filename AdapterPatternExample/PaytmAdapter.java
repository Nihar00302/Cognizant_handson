public class PaytmAdapter implements PaymentProcessor {

    PaytmGateway paytm =
            new PaytmGateway();

    public void processPayment() {
        paytm.pay();
    }

}