import { Card as CardNextUi, Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const ListCard = ({content, url}) => {

 
  return (
    <>
      <Link to={url}> <article className='card'>
        <CardNextUi className='card_F_layer'>
          <Grid.Container>
            <Grid xs={12}>
              <h4>
                {content.name ? content.name : content.title}
              </h4>
            </Grid>
          </Grid.Container>
        </CardNextUi>
      </article> </Link>
    </>
  );
};


ListCard.propTypes = {
  content: PropTypes.object,
  url: PropTypes.string,
}
export default ListCard;
