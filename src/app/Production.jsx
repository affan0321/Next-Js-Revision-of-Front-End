const renderProductDetails = (product) => {
    switch (product.category) {
        case "Electronics":
            return <p>Warranty Period: {product.warrantyPeriod}</p>;
        case "Clothing":
            return (
                <>
                    <p>Size: {product.size}</p>
                    <p>Material: {product.material}</p>
                </>
            );
        case "Groceries":
            return <p>Expiration Date: {product.expirationDate}</p>;
        default:
            return <p>No additional details available.</p>;
    }
};


function Production({ product }) {
    return (
        <div>
            {product.name}
            {product.name === "Electronics" && <p>Warranty period : {product.warrantyperiod}</p>}
            {product.name === "Clothing" && <p>Material is : {product.material}</p>}
        </div>
    )
}

export default Production;