import Production from "./Production";

function Product() {
    const products = [
        { id: 1, name: "Electronics", warrantyperiod: 5 },
        { id: 2, name: "Clothing", material: "cotton" },
    ]
    return (
        <div>
            <li>
                {products.map((Products) => (
                    <Production key={Products.id} product={Products} />
                ))}
            </li>
        </div>
    )
}
export default Product;