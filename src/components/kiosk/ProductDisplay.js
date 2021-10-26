import React from 'react';

const ProductDisplay = ({products, addCart}) => {

   // const list = products.map((p)=><li></li>) 람다식,, (p)를 아래와같이 줄여서 쓸 수 있다.
    const list = products.map(p =><li key={p.pno} onClick={()=> addCart()}>{p.name} --- {p.price}</li>)

    return (
        <div>
            <h1>상품목록</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ProductDisplay;