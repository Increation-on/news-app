import Skeleton from "../../components/Skeleton/Skeleton";

const withSkeleton = (Component, type, count) => {
    return (props) => {
        const { isLoading, ...restProps } = props;
        if (isLoading) {
            return <Skeleton type={type} count={count} />
        }
        return <Component {...restProps} />
    }
}

export default withSkeleton;