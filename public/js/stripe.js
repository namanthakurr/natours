import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51PfI4CKWhdud065E4qQaLJBfBy558Fi8NPiYo9yAqA6QABRbPwCjhoshcYOFz924pyoB1onGhaeC9HH8J16QuwOZ00qpDBQcvy',
);

export const bookTour = async (tourId) => {
  try {
    // 1)Get Checkout Sessions from Api
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2)Create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
