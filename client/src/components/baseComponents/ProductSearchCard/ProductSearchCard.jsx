import { Card as CardNextUi, Grid } from "@nextui-org/react";
import { BsTrash3, BsHeartFill } from "react-icons/bs";
import PropTypes from 'prop-types';


const ProductSearchCard = ({content, isSelected=false, handleClick }) => {
 
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
          <Grid.Container className='productSearch_info'>
            {isSelected ? <BsTrash3 onClick={handleClick} /> : <BsHeartFill onClick={handleClick} />}
            <p>{`€ ${content.price}`}</p>
          </Grid.Container>
        </CardNextUi>
      </article>
    </>
  );
};


ProductSearchCard.propTypes = {
  content: PropTypes.object,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func,
}
export default ProductSearchCard;
