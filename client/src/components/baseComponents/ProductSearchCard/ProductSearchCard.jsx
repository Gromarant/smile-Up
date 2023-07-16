import { Card as CardNextUi, Grid } from "@nextui-org/react";
// import { BsFilePlus, BsFileMinus } from "react-icons/bs";
import PropTypes from 'prop-types';


const ProductSearchCard = ({content}) => {

 
  return (
    <>
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
                {content.name ? content.name : content.title}
              </p>
            </Grid>
          </Grid.Container>
          <Grid.Container className='productSearch_description'>
            <p>{`€ ${content.price}`}</p>
          </Grid.Container>
        </CardNextUi>
      </article>
    </>
  );
};


ProductSearchCard.propTypes = {
  content: PropTypes.object,
}
export default ProductSearchCard;
