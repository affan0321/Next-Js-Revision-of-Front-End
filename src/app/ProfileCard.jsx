function ProfileCard({name,Subscription = "free"}){
    return (
        <div>
            <h1>{name}</h1>
            <p>Subscription level : {Subscription}</p>
            {Subscription === "free" && <p>Upgrade to premium to get more features</p> }
            {Subscription === "Premium" && <p>Enjoy your premium features</p> }
            {Subscription === "VIP" && <p>Enjoy your all exclusive features</p> }
        </div>
    )
}
export default ProfileCard;