// import { Audio } from 'react-loader-spinner';

import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <div >
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="150"
      visible={true}
    />
  </div>
);

export default Loader;
