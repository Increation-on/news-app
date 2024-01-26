import Skeleton from "../../components/Skeleton/Skeleton";

const withSkeleton = (Component, type, count, direction) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const { isLoading, ...restProps } = props;
        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }
        return <Component {...restProps} />
    }
}

export default withSkeleton;