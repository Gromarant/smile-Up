// import { Card as CardNextUi, Grid, Text, Spacer, Button } from "@nextui-org/react";
import PropTypes from 'prop-types';


const Card = ({content}) => {

  // const {title, image, alt } = content;
  return (
    <>
      {/* <CardNextUi css={{ mw: "400px" }}>
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h3 css={{ lineHeight: "$xs" }}>
            {pokemonDetails.name}
          </Text>
        </Grid>
        <Card.Image
            src={pokemonDetails?.sprites?.other['official-artwork']?.front_default}
            objectFit="cover"
            width="fit-content"
            alt={pokemonDetails.name}
          />
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>Peso</Text>
          <Spacer x={1} />
          <Text css={{ color: "$accents8" }}>{`${pokemonDetails.weight / 10} kg`}</Text>
          <Spacer x={2} />
          <Text h4 css={{ lineHeight: "$xs" }}>Altura</Text>
          <Spacer x={1} />
          <Text css={{ color: "$accents8" }}>{`${pokemonDetails.height / 10} mts`}</Text>
        </Grid>
        <Spacer y={1} />
        <Card.Divider />
      </Grid.Container>
      <Grid.Container gap={1}>
      {pokemonDetails.types && pokemonDetails.types?.map(type => (<Grid key={uuidv4()}>
          <Button flat color="secondary" auto>{type.type.name}</Button>
        </Grid> 
        ))
      }
      </Grid.Container>
      </CardNextUi> */}
    </>
  );
};
 // <article>
    //   <h1>{title}</h1>
    //   <img src={image} alt={alt} />
    // </article>

Card.propTypes = {
  content: PropTypes.object,
}
export default Card;
