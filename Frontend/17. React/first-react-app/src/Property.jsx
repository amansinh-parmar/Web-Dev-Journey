function Property({id, name, rating, price}){
    
    return (
        <div className="Property">
            <h3>{name}</h3>
            <h4>${price} /night</h4>
            <h4>{rating}⭐</h4>
        </div>
    )
}

export default Property;