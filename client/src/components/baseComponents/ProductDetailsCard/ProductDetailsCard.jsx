import { Card as CardNextUi, Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';


const ProductDetailsCard = ({content}) => {
 
  return (
    <article className='productSearch_card'>
      <CardNextUi className='productSearch_layer'>
        { content.image &&
          <CardNextUi.Image className='productSearch_img'
            src={content.image}
            alt={content.title}
          /> }
        <Grid.Container>
          <Grid xs={12}>
            <p className='productSearch_title'>
              {content.title && content.title}
            </p>
          </Grid>
        </Grid.Container>
        <Grid.Container className='productSearch_info'>
          <p>{`€ ${content.price}`}</p>
        </Grid.Container>
      </CardNextUi>
    </article>
  );
};

ProductDetailsCard.propTypes = {
  content: PropTypes.object
}

export default ProductDetailsCard;