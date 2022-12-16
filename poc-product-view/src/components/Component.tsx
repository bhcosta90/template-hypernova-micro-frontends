import React from 'react';
import {
  Card,
  CardImage,
  CardImageHeader,
  CardImageFooter,
  CardDescription,
  CardImageFooterDivider,
  Tag,
  ProductImage,
  Icon,
  BrandName,
  ProductName,
  Price
} from '@dafiti/poc-lib-frontend-new-web'

export type ComponentType = {
  name: string,
  price: string,
  urlImage: string,

  black?: boolean,
  discount?: string,
  eco?: boolean,
  wish?: boolean,
  cart?: boolean,
  brand: string,
  finalPrice?: string,
  free_shipping?: boolean,
  sponsor?: boolean,
}

const Component = (props: ComponentType) => <Card>
  <CardImage>
    <CardImageHeader>
      {props.black && 
        <Tag
          uppercase
          label="black"
          type="tag-dark"
        />}
      {props.discount && 
        <Tag
          label={props.discount}
          type="tag-pink"
        />}
    </CardImageHeader>
    <ProductImage src={props.urlImage} />
    <CardImageFooter>
      {props.eco &&
        <CardImageFooterDivider>
          <Icon type="eco" onClick={() => alert('click in eco')} />
        </CardImageFooterDivider>
      }

      {(props.wish || props.cart) &&
        <CardImageFooterDivider>
          {props.wish &&
            <Icon type="heart" onClick={() => alert('click in hearth')} />
          }

          {props.cart &&
            <Icon type="add-cart" badge="+" onClick={() => alert('click in add cart')} />
          }
        </CardImageFooterDivider>
      }

    </CardImageFooter>
  </CardImage>
  <CardDescription>
    <BrandName name={props.brand} />
    <ProductName name={props.name} />
    <Price price={props.price} promotionalPrice={props.finalPrice || ''} />
    {props.free_shipping &&
      <Tag
        asText
        label="free shipping"
        type="tag-text__primary"
      />
    }
    {props.sponsor &&
      <Tag
        asText
        label="sponsored"
        type="tag-text__secondary"
      />}
  </CardDescription>
</Card>

export default Component