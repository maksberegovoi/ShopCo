interface SkeletonProps {
    width?: string
    height?: string
    radius?: string
    marginTop?: string
    className?: string
}

const Skeleton = ({
    width = '100%',
    height = '100%',
    radius = '4rem',
    marginTop,
    className
}: SkeletonProps) => {
    return (
        <div
            className={`skeleton ${className}`}
            style={{
                width,
                height,
                borderRadius: radius,
                marginTop
            }}
        />
    )
}

export default Skeleton
