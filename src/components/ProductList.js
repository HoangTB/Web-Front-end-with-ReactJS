import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProductList(props) {
    const listPhone = [
        {   
            id:1,
            image: "/1.png",
            name: "Iphone 14 pro",
            price: 999,
            quantity:1,
        },
        {
            id:2,
            image: "/2.png",
            name: "Iphone 13 pro",
            price: 899,
            quantity:1,
        },
        {   
            id:3,
            image: "/3.png",
            name: "Iphone 12 pro",
            price: 799,
            quantity:1,
        },
        {
            id:4,
            image: "/4.png",
            name: "Iphone 11 pro",
            price: 699,
            quantity:1,
        },
        {
            id:5,
            image: "/5.png",
            name: "Iphone 10 pro",
            price: 599,
            quantity:1,
        },
        {
            id:6,
            image: "/6.png",
            name: "Iphone 8 pro",
            price: 499,
            quantity:1,
        },
    ]

    const handleAdd = (phone) => {
        props.onAddPhone(phone);

    }
    return (
        <div className='AAA'>
            {listPhone.map((phone, index) => {
                return (
                    <Card className="p-4" key = {phone.id}>
                        <Card.Img variant="top" src={phone.image} />
                        <Card.Body>
                            <Card.Title>{phone.name}</Card.Title>
                            <Card.Text>
                                {phone.price} $
                            </Card.Text>
                            <Button variant="primary" onClick={()=> handleAdd(phone)}>Add to card</Button>
                        </Card.Body>
                    </Card>
                )
            })}


        </div>

    );
}

export default ProductList;
