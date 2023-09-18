function DrinkList (){
            const drinks = [{
                id:1,
                name:"Apple juice",
                image:'https://img.freepik.com/premium-photo/glass-apple-juice-apples-isolated-white_392895-352431.jpg?w=826',
            },
            {
                id:2,
                name:"Pineaple juice",
                image:'https://wallpapercave.com/wp/wp3117268.jpg',
            },
            {
                id:3,
                name:"Orange juice ",
                image:'https://images.pexels.com/photos/3642/drink-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
                id:4,
                name:"Wine",
                image:'https://c1.wallpaperflare.com/preview/704/706/404/food-drink-alcohol-drink-drinks.jpg',
            },
            {
                id:5,
                name:"Whiskey",
                image:'https://images5.alphacoders.com/499/499036.jpg',
            },
            {
                id:6,
                name:"Beer",
                image:'https://images2.alphacoders.com/779/779302.jpg',
            },
        ]

    return (
        <div>
            {drinks.map((drink)=>(
                <>
                <h5>{drink.name}</h5>
                <img src={drink.image} alt={drink.name}></img>
                </>
            ))}
        </div>
    )

}

export default DrinkList