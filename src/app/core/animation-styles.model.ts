import { ENTERED, ENTERING, EXITED, EXITING, UNMOUNTED } from 'react-transition-group/Transition';

export type AnimationStyles = {
  default?: React.CSSProperties;
  transition: {
    [ENTERING]?: React.CSSProperties;
    [ENTERED]?: React.CSSProperties;
    [EXITING]?: React.CSSProperties;
    [EXITED]?: React.CSSProperties;
    [UNMOUNTED]?: React.CSSProperties;
  };
};
