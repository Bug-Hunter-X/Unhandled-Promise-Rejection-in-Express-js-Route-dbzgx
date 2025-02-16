# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.

## The Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation using `someAsyncOperation()`.  If `someAsyncOperation()` throws an error, the error isn't caught, leading to an unhandled promise rejection and potential application crash.

## The Solution

The `bugSolution.js` file shows how to properly handle potential errors using a `.catch()` block within the route handler. This ensures that any exceptions are gracefully caught and managed.