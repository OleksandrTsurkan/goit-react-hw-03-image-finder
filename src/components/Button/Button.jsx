export const Button = ({ onClickRender }) => {
  return (
    <div>
      <button type="button" onClick={onClickRender}>
        Load more
      </button>
    </div>
  );
};
