const express = require('express');
const reviewController = require('../controller/reviewController');
const authController = require('../controller/authController');

const router = express.Router({ mergeParams: true });

// POST /tour/tourId/reviews
// POST /reviews
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

// router
//   .route('/:id')
//   .get(reviewController.getReview)
//   .patch(reviewController.updateReview)
//   .delete(reviewController.deleteReview);

module.exports = router;
