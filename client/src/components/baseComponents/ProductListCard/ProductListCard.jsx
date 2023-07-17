import { Card as CardNextUi, Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';

const ProductListCard = ({content}) => {
  return (
    <>
      <article className='productList_card'>
        <CardNextUi className='productList_layer'>
          { content.image &&
            <CardNextUi.Image className='productList_img'
              src={content.image}
              alt={content.title}
            /> }
          <Grid.Container>
            <Grid xs={12}>
              <p className='productList_title'>
                {content.title}
              </p>
            </Grid>
          </Grid.Container>
          <Grid.Container className='productList_description'>
            <p>{`€ ${content.price}`}</p>
          </Grid.Container>
        </CardNextUi>
      </article>
    </>
  );
};

ProductListCard.propTypes = {
  content: PropTypes.object,
  handleClick: PropTypes.func,
}

export default ProductListCard;