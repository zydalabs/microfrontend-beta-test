# POC Orders Revamp via Microfrontend

In this repo, we are testing the approach of having a monorepo hosting multiple microfrontends 

So we have 4 folders

1. Container
2. Orders
3. Marketing
4. Header


# Container

In this folder, we wrap all the other 3 microfrontend projects created with `create-react-app` and host them in one single page.

Container App glues all the 3 pages into one.

# Header

A normal header that is found in every page

# Orders

In this folder, we are handling the routes, Orders website has a home page where all orders are rendered, and if you clicked on a specific order, you will be redirected to the order details page.

We wanted to test the routing and pages redirection in case of microfrontends and how it could be handled.
