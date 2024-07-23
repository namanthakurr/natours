// const express = require('express');
// const reviewController = require('./../controllers/reviewController');
// const authController = require('./../controllers/authController');

// const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

// router
//   .route('/')
//   .get(reviewController.getAllReviews)
//   .post(
//     authController.restrictTo('user'),
//     reviewController.setTourUserId,
//     reviewController.createReview,
//   );

// router
//   .route('/:id')
//   .get(reviewController.getReview)
//   .patch(
//     authController.restrictTo('user', 'admin'),
//     reviewController.updateReview,
//   )
//   .delete(
//     authController.restrictTo('user', 'admin'),
//     reviewController.deleteReview,
//   );

// module.exports = router;

// example
// POST /tour/54654fg/reviews
// GET /tour/54654fg/reviews
// POST /reviews

// sarthak

const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const express = require('express');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserId,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
