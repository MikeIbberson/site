import classnames from 'classnames';
import { useInView } from '@react-spring/web';

const useScroller = (options = {}) => {
  const {
    scrollerClassName = 'scroller',
    inViewClassName = 'inview',
  } = options;

  const [ref, inView] = useInView({
    once: true,
  });

  const className = classnames(
    [
      scrollerClassName,
      inView ? inViewClassName : undefined,
    ].filter(Boolean),
  );

  return {
    className,
    ref,
  };
};

export default useScroller;
