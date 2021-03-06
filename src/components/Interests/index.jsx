import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';
import HeroWithText from '../HeroWithText';
import PrimaryButton from '../PrimaryButton';
import giftImage from '../../assets/gift@3x.png';

const Container = styled.div`
`;
const Category = styled.div`
  font-size: 23px;
  color: rgb(17, 17, 17);
  margin: 10px 17px;
`;
const ItemWrapper = styled.div`
`;
const GiftImage = styled.img`
  width: 30px;
  vertical-align: text-top;
`;
const CategoryText = styled.span`
  font-weight: bold;
  margin-left: 11px;
`;
const ButtonContainer = styled.div`
  margin: auto;
  width: 240px;
  margin-top: 24px;
`;

function getItems(questions) {
  const items = [];

  questions.forEach(
    question => Object.keys(question.answers).forEach(
      key => items.push({
        text: key,
        url: question.answers[key],
      }),
    ),
  );
  return items;
}

export default function Interests(props) {
  const {
    items,
  } = props;
  console.log(items);

  return (
    <Container>
      <HeroWithText text="Maybe something changed?" />
      <Category>
        <GiftImage src={giftImage} />
        <CategoryText>
          Gifts
        </CategoryText>
      </Category>
      {getItems(items).map(item => (
        <ItemWrapper key={item.text}>
          <Item
            text={item.text}
            url={item.url}
          />
        </ItemWrapper>
      ))}
      <ButtonContainer>
        <PrimaryButton>
          More
        </PrimaryButton>
      </ButtonContainer>
    </Container>
  );
}

Interests.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
  })),
};

Interests.defaultProps = {
  items: [],
};
