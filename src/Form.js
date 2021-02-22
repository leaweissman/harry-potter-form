import styled from 'styled-components';
import { useState } from 'react';

export default function Form() {
    const [product, setProduct] = useState({
        product_name: '',
        second_name: '',
        mailing: '',
        price: '',
        currency: 'Galleon',
        category: '',
        producttag: [],
        sale: false,
    });
    const handleChange = (event) => {
        const field = event.target;
        const value = field.type === 'checkbox' ? field.checked : field.value;
        setProduct({
            ...product,
            [field.name]: value
        })
    };


    return (
        <ProductForm>
            <h1>A not so simple Form</h1>
            <label> Product Name:
                <input
                    type='text'
                    name='product_name'
                    onChange={handleChange}
                    value={product.first_name} />
            </label>
            <br></br>
            <label> Price:
                <input
                    type='text'
                    name='price'
                    onChange={handleChange}
                    value={product.price} />
            </label>

            <label> Currency:
                <input
                    type='text'
                    name='currency'
                    onChange={handleChange}
                    value={product.currency} />
            </label>
            <br></br>
            <section>
                <select name='category' value={product.category} onChange={handleChange}>
                    <option value='category1' onChange={handleChange}>category 1</option>
                    <option value='category2' onChange={handleChange}>category 2</option>
                    <option value='category3' onChange={handleChange}>category 3</option>
                </select>
            </section>
            <p>Chosen category:{product.category}</p>
            <section>
                <p>Packaging size:</p>
                <input
                    type='radio'
                    name='size'
                    onChange={handleChange}
                    value='small' />S

                <input
                    type='radio'
                    onChange={handleChange}
                    name='size'
                    value='medium' />M

                <input
                    type='radio'
                    name='size'
                    onChange={handleChange}
                    value='large' />L
            </section>
            <label> Support Contact (Mailing):
                <input
                    type='text'
                    name='mailing'
                    onChange={handleChange}
                    value={product.mailing} />
            </label>
            <br></br>
            <label> Product tags:
                <input
                    type='text'
                    name='producttag'
                    onChange={handleChange}
                    value={product.producttag} />
            </label>
            <p>On sale:</p>
            <input
                type='checkbox'
                name='sale'
                checked={product.sale}
                onChange={handleChange}
                value={1} />
            <p>You entered:{product.product_name}</p>
            <p>{product.price} {product.currency}</p>
            <p>{product.category}</p>
            <p>on sale: {product.sale ? 'Yes' : 'No'}</p>
        </ProductForm>
    )
}


const ProductForm = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: column;`

const Checkbox = styled.section`
margin: none;`

