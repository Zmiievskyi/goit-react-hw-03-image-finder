import {BtnStyled} from '../Button/Button.styled'


export const BtnLoadMore = (props) => {
    return (
      <BtnStyled type="submit" onClick={props.onClick}>
        load more
      </BtnStyled>
    );
}