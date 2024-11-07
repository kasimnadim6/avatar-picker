import PropType from 'prop-types';

export const Avatar = ({ id, source, label, onClick, loadingId }) => {
  return (
    <div className="avatar">
      <img
        src={source}
        alt={label}
        onClick={(event) => {
          onClick({
            id,
            source,
            label,
          });
          event.stopPropagation();
        }}
      />
      {loadingId && loadingId === id && <div className="circle-loader"></div>}
    </div>
  );
};

Avatar.propTypes = {
  id: PropType.number.isRequired,
  source: PropType.string.isRequired,
  label: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  isLoading: PropType.bool,
};
