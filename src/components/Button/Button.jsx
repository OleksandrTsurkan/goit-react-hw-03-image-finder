import { ButtonMore, WrapperButton } from './Button.styled';

export const Button = ({ onClickRender }) => {
  return (
    <WrapperButton>
      <ButtonMore type="button" onClick={onClickRender}>
        Load more
      </ButtonMore>
    </WrapperButton>
  );
};
