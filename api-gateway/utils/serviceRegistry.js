const services = {
  userService: "http://localhost:3001",
  bookService: "http://localhost:3002",
  paymentService: "http://localhost:3003",
  reviewService: "http://localhost:3004",
  productService: "http://localhost:3005",
};

const serviceRegistry = {
  getServiceUrl: (serviceName) => {
    return services[serviceName];
  },
};

module.exports = serviceRegistry;
