function ProductCard({ product, owner = "Affan" }) {
    return (
        <div>
            <li>
                {product.name} - {product.price} - {product.category}
                <br />
                <h1>Owner is :  {owner}</h1>

            </li>
        </div>
    )
}
export default ProductCard;