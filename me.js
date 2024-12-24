// /e-book-application
//    ├── /api-gateway
//    │    ├── app.js
//    │    ├── routes/
//    │    │    ├── userRoutes.js
//    │    │    ├── bookRoutes.js
//    │    │    ├── paymentRoutes.js
//    │    │    ├── reviewRoutes.js
//    │    │    └── productRoutes.js        # New product routes added
//    │    ├── middlewares/
//    │    │    ├── authMiddleware.js
//    │    │    ├── errorHandler.js
//    │    │    ├── requestLogger.js
//    │    │    └── rateLimiter.js           # Rate limiting middleware
//    │    ├── utils/
//    │    │    └── serviceRegistry.js
//    │    └── config/
//    │         ├── environment.js
//    │         └── gatewayConfig.js
//    │
//    ├── /user-service
//    │    ├── app.js
//    │    ├── routes/
//    │    │    └── userRoutes.js
//    │    ├── controllers/
//    │    │    └── userController.js
//    │    ├── models/
//    │    │    └── userModel.js
//    │    ├── services/
//    │    │    └── authService.js
//    │    ├── middlewares/
//    │    │    └── validateUser.js
//    │    └── config/
//    │         └── dbConfig.js
//    │
//    ├── /book-catalog-service
//    │    ├── app.js
//    │    ├── routes/
//    │    │    └── bookRoutes.js
//    │    ├── controllers/
//    │    │    └── bookController.js
//    │    ├── models/
//    │    │    └── bookModel.js
//    │    ├── services/
//    │    │    └── bookService.js
//    │    ├── middlewares/
//    │    │    └── validateBook.js
//    │    └── config/
//    │         └── dbConfig.js
//    │
//    ├── /payment-service
//    │    ├── app.js
//    │    ├── routes/
//    │    │    └── paymentRoutes.js
//    │    ├── controllers/
//    │    │    └── paymentController.js
//    │    ├── models/
//    │    │    └── paymentModel.js
//    │    ├── integrations/
//    │    │    ├── stripeIntegration.js
//    │    │    └── paypalIntegration.js
//    │    ├── services/
//    │    │    └── paymentService.js
//    │    └── config/
//    │         └── dbConfig.js
//    │
//    ├── /review-service
//    │    ├── app.js
//    │    ├── routes/
//    │    │    └── reviewRoutes.js
//    │    ├── controllers/
//    │    │    └── reviewController.js
//    │    ├── models/
//    │    │    └── reviewModel.js
//    │    ├── services/
//    │    │    └── reviewService.js
//    │    ├── middlewares/
//    │    │    └── validateReview.js
//    │    └── config/
//    │         └── dbConfig.js
//    │
//    ├── /product-service                    # New Product Service added
//    │    ├── app.js
//    │    ├── routes/
//    │    │    └── productRoutes.js
//    │    ├── controllers/
//    │    │    └── productController.js
//    │    ├── models/
//    │    │    └── productModel.js
//    │    ├── services/
//    │    │    └── productService.js
//    │    ├── middlewares/
//    │    │    └── validateProduct.js
//    │    └── config/
//    │         └── dbConfig.js
//    │
//    ├── /shared
//    │    ├── middlewares/
//    │    │    ├── corsSetup.js
//    │    │    ├── validateInput.js         # New middleware for validation added
//    │    │    └── requestLogger.js
//    │    ├── utils/
//    │    │    ├── logger.js
//    │    │    └── responseHandler.js
//    │    ├── config/
//    │    │    └── sharedEnv.js
//    │    └── constants/
//    │         └── errorMessages.js
//    │
//    └── /docs                               # API Documentation (Swagger/OpenAPI)
//         └── api-specs.yaml
