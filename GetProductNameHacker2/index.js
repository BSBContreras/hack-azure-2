module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const productId = (req.query.productId);
    const responseMessage = productId
        ? "The product name for your product id " + productId + " is Starfruit Explosion"
        : "This HTTP triggered function executed successfully. Pass a productId in the query string for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}